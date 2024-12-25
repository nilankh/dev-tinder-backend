const mongoose = require('mongoose');
const { useFormStatus } = require('react-dom');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    emailId: {
        type: String
    },
    password: {
        type: String
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    }
})

// creating a model
const User = mongoose.model("User", userSchema);

module.exports = User;