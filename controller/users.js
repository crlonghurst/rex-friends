const query = require('../database/queries');
const user = require('../model/users');


exports.postDeleteUserPost = (req, res, next) => {
    const userId = req.body.users_id;
    req.query.deleteUserPosts(userId)
        .then(result => {
            const updatedPosts = this.user.items.filter(item => {
                return item.userId.user.toString() !== userId.user.toString();
            });
            this.userId.user = updatedPosts;
        })
        .catch(err => console.log(err));

    return this.save();
};

exports.updateUser = (req, res, next) => {
    const userId = req.body.users_id;
    const user_first_name = req.body.user_first_name;
    const user_last_name = req.body.user_last_name;
    const username = req.body.username;
    const user_password = req.body.user_password;

    req.query.updateUser(users_id, user_first_name, user_last_name, username, user_password, )
        .then(result => {
            user.findById(userId)
                .then(product => {
                    user.userId = userId;
                    user.user_first_name = user_first_name;
                    user.user_last_name = user_last_name;
                    user.username = username;
                    user.user_password = user_password;
                    return user.save();
                })
                .then(result => {
                    console.log('UPDATED PRODUCT!');
                    res.redirect('/getUser');
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
};