const mongoose = require('mongoose');

const newsFeedSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

const NewsFeed = mongoose.model('NewsFeed', newsFeedSchema);

module.exports = NewsFeed;
