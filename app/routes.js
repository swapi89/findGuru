// app/routes.js
var User            = require('../app/models/user');
module.exports = function(app, passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        User.find(function(err, docs){
            console.log(docs);
            //res.json(docs);
            res.render('index.ejs', {
                users : docs // get the user out of session and pass to template
            }); // load the index.ejs file
        });
        
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('login.ejs', { message: req.flash('loginMessage') }); 
    });
    /*app.get('/edit', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('edit.ejs', { message: req.flash('loginMessage') }); 
    });*/
    // process the login form
    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
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
    app.get('/edit', isLoggedIn, function(req, res) {
        console.log("edit");
        console.log(req.user);
       res.render('edit.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });
    app.post('/edit', isLoggedIn, function(req, res) {
        //console.log(req.body.name);
        //console.log(req.body.email);
        User.findOne({ 'local.email' :  req.body.email }, function(err, user) {
            // if there are any errors, return the error before anything else
            if (err)
                console.log(err);

            // if no user is found, return the message
            if (!user)
                console.log(user);
                //return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash

            // if the user is found but the password is wrong
            /*if (!user.validPassword(password))
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata*/
            if(user){
                user.local.name = req.body.name;
                user.save(function(err) {
                    if(!err) {
                        console.log(user);
                        res.render('profile.ejs', {
                            user : user,
                            profileUpdate: true// get the user out of session and pass to template
                        });
                    }
                    else {
                        console.log("Error: could not save contact " + user.local.name);
                    }
                });
            }
            
        });
    });
    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });
    

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}