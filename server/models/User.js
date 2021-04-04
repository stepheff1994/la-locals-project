const { Schema, model } = require('mongoose');
const userPhotoSchema = require('./Photo');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
  age: {
    type: Number,
    required: true
  },
  // location: {
  //   type: String,
  //   required: true
  // },
  // gender: {
  //   type: String,
  //   required: true
  // },
  photos: [userPhotoSchema]
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});
// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
const User = model('User', userSchema);

module.exports = User;
