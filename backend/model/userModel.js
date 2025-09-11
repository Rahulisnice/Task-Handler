const mongoose = require("mongoose");
const uniqid = require('uniqid');

//schema
const userSchema = new mongoose.Schema({
  uid:{
    type: String,
    unique: true,
    default: uniqid,
  },
  username: {
    type: String,
    required:true
  },
  email: {
    type: String,
    required:true,
    unique: true
  },
  password: {
    type: String,
    required:true
  },
}, {timestamps: true});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;