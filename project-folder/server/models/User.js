const { Schema, model } = require('mongoose');
const userPhotoSchema = require('./Photo');

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: Number,
    required: true,
  },
  birthday: {
    type: String, 
    required: true
  },
  location: {
    type: String, 
    required: true
  },
  gender: {
    type: String, 
    required: true
  },
  photos:[userPhotoSchema]
});

const User = model('User', UserSchema);

module.exports = User;
