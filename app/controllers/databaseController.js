var User = require('../../app/models/user');

module.exports = {
    findAllUsers: function() {
        allUsersPrmoise = new Promise(function(resolve, reject){
            User.find(function(err, docs){
                resolve(docs);
            });    
        })
        return allUsersPrmoise;
    },
    findAndEditUser: function(req){
        findAndEditUserPromise = new Promise(function(resolve, reject){
            User.findOne({ 'local.email' :  req.body.email }, function(err, user) {
                // if there are any errors, return the error before anything else
                if (err)
                    console.log(err);

                // if no user is found, return the message
                /*if (!user){
                    console.log(user);
                    return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
                }*/

                // if the user is found but the password is wrong
                /*if (!user.validPassword(password))
                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata*/
                if(user){
                    user.local.name = req.body.name;
                    user.save(function(err) {
                        if(!err) {
                            resolve(user);
                        }
                        else {
                            console.log("Error: could not save contact " + user.local.name);
                        }
                    });
                }

            });
        });
        return findAndEditUserPromise;
    }
}