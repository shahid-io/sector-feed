const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
    state: String,
    country: String,
    zipCode: String,
});


const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    bio: {
        type: String,
    },
    address: addressSchema,
    created_at: {
        type: Date,
        default: Date.now,
    },
});


const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
