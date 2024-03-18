const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const NewsFeed = require('./models/newsfeed');
const Author = require('./models/author');

const app = express();
app.use(bodyParser.json());

const connect = async () => {
    mongoose.connect('mongodb://127.0.0.1:27017/sector-feed', {
    });
    console.log('MONGO CONNECTED');
}


/**
 * AUTHOR
 */

app.post('/author', async (req, res) => {
    try {
        const post = { name, email, bio, address: { street, city, state, country, zipcode } } = req.body;
        const data = await Author.create(post);
        res.status(200).json({ status: 'OK', message: "author created sucess", data: data })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Error author' });
    }
});


/**
 * HELPER Fn
 */

const getPagination = (req) => {
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 10;
    const skip = (page - 1) * size;
    return { page, size, skip }
}

app.get('/author', async (req, res) => {
    try {
        const { page, size, skip } = getPagination(req);
        const totalCount = await Author.countDocuments();
        const totalPages = Math.ceil(totalCount / size);

        const data = await Author.find()
            .skip(skip)
            .limit(size)
            .exec();
        res.status(200).json({
            status: 'OK',
            message: "author fetched sucess",
            data: data,
            pagination: {
                currentPage: page,
                totalPages: totalPages,
                totalCount: totalCount,
            },
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Error author' });
    }
});

/**
 * NEWS FEED
 */

app.post('/newsfeed', async (req, res) => {
    try {
        const post = await NewsFeed.create(req.body);
        res.status(200).json({ status: 'OK', message: 'news feed created success', data: post })
    } catch {
        console.log(error.message)
        res.status(500).json({ error: 'Error news feed' });
    }
})

app.get('/newsfeed/:id', async (req, res) => {
    try {
        const newsFeed = await NewsFeed.findById(req.params.id).populate('author');
        res.status(200).json({ status: 'OK', message: 'news feed fetched success', data: newsFeed })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Error fetching news feed' });
    }
});

app.get('/newsfeed', async (req, res) => {
    try {
        // const page = parseInt(req.query.page) || 1;
        // const size = parseInt(req.query.size) || 10;
        // const skip = (page - 1) * size;
        const { page, size, skip } = getPagination(req);
        const totalCount = await NewsFeed.countDocuments();
        const totalPages = Math.ceil(totalCount / size);

        const newsFeed = await NewsFeed.find()
            .populate('author')
            .skip(skip)
            .limit(size);

        res.status(200).json({
            status: 'OK',
            message: 'News feeds fetched successfully',
            data: newsFeed,
            pagination: {
                currentPage: page,
                totalPages: totalPages,
                totalCount: totalCount,
            },
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Error fetching news feed' });
    }
});

app.get('/newsfeed', async (req, res) => {
    try {
        const newsFeed = await NewsFeed.find().populate('author');
        res.status(200).json({ status: 'OK', message: 'news feeds fetched success', data: newsFeed })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Error fetching news feed' });
    }
});




const PORT = 3000;
app.listen(PORT, async () => {
    await connect();
    console.log(`http://localhost:${PORT}`);
});
