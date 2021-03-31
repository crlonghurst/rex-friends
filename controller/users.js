const query = require('../database/queries');


exports.postDeleteUserPost = (req, res, next) => {
    const userId = req.body.users_id;
    query.deleteUserPosts(userId)
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

    query.updateUser(userId, user_first_name, user_last_name, username, user_password)
        .then(result => {
            console.log('UPDATED PRODUCT!');
            res.redirect('/getUser');
        })
        .catch(err => console.log(err));
};