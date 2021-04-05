const { Schema, model } = require('mongoose')
const messageSchema = require('./Message');

const conversationSchema = new Schema (
    {
        recipient: {
            type: String,
        },
        message: [messageSchema],
        username: {
            type: String,
            required: true
        }
    }
);

const Conversation = model('Conversation', conversationSchema);

module.exports = Conversation;