var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var addressSchema = mongoose.Schema({
  country    : {
      name   : String,
  },
  state      : {
      name    : String,
      countryId: String
  },
  city:{
      name: String,
      stateId: String
  },
  area:{
      name: String,
      cityId: String
  }

});
