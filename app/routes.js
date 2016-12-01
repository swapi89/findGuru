// app/routes.js
var User = require('../app/models/user');
var databaseController = require('../app/controllers/databaseController');
var authenticationController = require('../app/controllers/authenticationController');
module.exports = function(app, passport) {
    //Home page listing all the users
    app.get('/', function(req, res) {
        var allUsersPrmoise = databaseController.findAllUsers();
        allUsersPrmoise.then(function(result){
            res.render('index.ejs', {
                users : result // get the user out of session and pass to template
            });
        })
        .catch(function(reason){
            console.log('Handle rejected promise ('+reason+') here.');
        });
    });

    //Login page
    app.get('/login', function(req, res) {
        // render the page and pass in any flash data if it exists
        res.render('login.ejs', { message: req.flash('loginMessage') }); 
    });
    
    //Login form Authentication
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
    
    //Signup page
    app.get('/signup', function(req, res) {
        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
    
    //Show Edit page after checking whether the user is logged in or not
    app.get('/edit', authenticationController.isLoggedIn, function(req, res) {
        res.render('edit.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });
    
    //Update the user after editing the details
    app.post('/edit', authenticationController.isLoggedIn, function(req, res) {
        var findAndEditUserPromise = databaseController.findAndEditUser(req);
        findAndEditUserPromise.then(function(user){
            res.render('profile.ejs', {
                user : user,
                profileUpdate: true// get the user out of session and pass to template
            });
        })
        .catch(function(reason){
            console.log('Handle rejected promise ('+reason+') here.');
        });
        
    });
    
    //User Profile Page
    app.get('/profile', authenticationController.isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });
    
    //Logout the user when user clicks on Logout
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};

