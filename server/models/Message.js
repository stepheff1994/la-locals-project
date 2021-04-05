const { Schema } = require('mongoose');

const messageSchema = new Schema(
    {
        sender: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    }
);

module.exports = messageSchema;