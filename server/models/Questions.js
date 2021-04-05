const { Schema } = require('mongoose');
//subdocoument instead of own schema
const userRegisterQuestions = new Schema({
    question1: {
        type: String,
        required: true
    },

    question2: {
        type: String,
        required: true
    },
    question3: {
        type: String,
        required: true
    },
    question4: {
        type: String,
        required: true
    },
    question5: {
        type: String,
        required: true
    },
});

module.exports = userRegisterQuestions;