const mongoose = require('mongoose');

const metaInfo = new mongoose.Schema({
    slug: String,
    topic: String
});

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
    metaData: metaInfo,
    created_at: {
        type: Date,
        default: Date.now,
    },
});

const NewsFeed = mongoose.model('NewsFeed', newsFeedSchema);

module.exports = NewsFeed;
