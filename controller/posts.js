const User = require('../model/posts');


exports.getPosts = (req, res, next) => {
    res.render('/getPosts', {
        path: '/getPosts',
        pageTitle: 'News Feed',
    });

};