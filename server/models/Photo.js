const { Schema, Types } = require('mongoose');
//subdocoument instead of own schema
const userPhotoSchema = new Schema({
  photoId: {
    default: () => new Types.ObjectId(),
    type: Schema.Types.ObjectId
  },

  photoUrl: {
    type: String,
    required: true,
  },
});

module.exports = userPhotoSchema;
