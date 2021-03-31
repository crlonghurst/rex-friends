const query = require('../database/queries');


exports.postDeleteUserPost = (req, res, next) => {
    const userId = req.body.users_id;
    query.deleteUserPosts(userId, function(result) {
        console.log(result);
        if (!result) {
            console.error("That user was not deleted.");
            return res.send("User not deleted!")

        } else {
            console.log("The user was deleted")
            return res.send(result)
        }
    })


    return this.save();
};

exports.updateUser = (req, res, next) => {
    const userId = req.headers.users_id;
    const user_first_name = req.headers.user_first_name;
    const user_last_name = req.headers.user_last_name;
    const username = req.headers.username;
    const user_password = req.headers.user_password;

    console.log(userId)
    query.updateUser(userId, user_first_name, user_last_name, username, user_password, function(result) {
        console.log(result);
        if (!result) {
            console.error("That user was not updated.");
            return res.send("User not updated!")

        } else {
            console.log("The user was updated")
            return res.send(result)
        }
    })

};