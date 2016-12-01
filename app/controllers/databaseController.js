var User = require('../../app/models/user');

module.exports = {
    findAllUsers: function() {
        allUsersPrmoise = new Promise(function(resolve, reject){
            User.find(function(err, docs){
                resolve(docs);
            });    
        })
        return allUsersPrmoise;
    }
}