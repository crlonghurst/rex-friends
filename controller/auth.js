const User = require('../model/users');
const { validationResult } = require('express-validator');
const query = require('../database/queries');



exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: false
    });
};

//testing
exports.getSignup = (req, res, next) => {
    let message = req.flash('error');
    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }
};

exports.postLogin = (req, res, next) => {
    const username = req.headers.username;
    const password = req.headers.password;
    query.getOneUser(username, function(result) {
        if (!result) {
            console.error("That log in was not succesful!.");
            return res.sendStatus("User not logged in!")

        } else {
            console.log("The user was logged in")
            return res.sendStatus(result)
        }
    })
};

exports.postSignup = (req, res, next) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {

        console.log(errors.array());
        return res.sendStatus(422)
    }

    query.getOneUser(username, function(result) {
        if (!result) {
            console.error("That sign in was not succesful!.");
            return res.sendStatus("User not signed in!")

        } else {
            console.log("The user was signed in")
            return res.sendStatus(result)
        }
    })

};

exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
        console.log(err);
        res.redirect('/');
    });
};