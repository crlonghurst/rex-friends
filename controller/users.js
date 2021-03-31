const query = require('../database/queries');


exports.postDeleteUserPost = (req, res, next) => {
    const userId = req.body.users_id;
    query.deleteUserPosts(userId, function(result){})
        // .then(result => {
        //     const updatedPosts = this.user.items.filter(item => {
        //         return item.userId.user.toString() !== userId.user.toString();
        //     });
        //     this.userId.user = updatedPosts;
        // })
        // .catch(err => console.log(err));

    return this.save();
};

exports.updateUser = (req, res, next) => {
    const userId = req.headers.users_id;
    const user_first_name = req.headers.user_first_name;
    const user_last_name = req.headers.user_last_name;
    const username = req.headers.username;
    const user_password = req.headers.user_password;

    console.log(userId)
    query.updateUser(userId, user_first_name, user_last_name, username, user_password, function(result){
        console.log(result);
        if(!result){
            console.error("That user was not updated.");
            return res.send("User not updated!")
            
        }
        else{
            console.log("The user was updated")
            return res.send("User Updated.")
        }
    })
        // .then(result => {
        //     console.log('UPDATED PRODUCT!');
        //     res.redirect('/getUser');
        // })
        // .catch(err => console.log(err));
    
};