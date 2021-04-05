const { Schema, model } = require('mongoose');
const userPhotoSchema = require('./Photo');
const userRegisterQuestions = require('./Questions');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
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
  area: {
    type: String,
    required: true
  },
  identity: {
    type: String,
    required: true
  },
  preference: {
    type: String,
    required: true
  },
  photos: [userPhotoSchema],
  questions: [userRegisterQuestions]
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