const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://ArlonTuazon:Prettynikka13@cluster0.tilyo.mongodb.net/arlondb?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;