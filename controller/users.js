const User = require('../model/users');


exports.getUsers = (req, res, next) => {
    res.render('/getUsers', {
        path: '/getUsers',
        pageTitle: 'Users',
    });
};