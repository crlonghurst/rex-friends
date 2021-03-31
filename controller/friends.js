const User = require('../model/users');
const query = require('../database/queries')


exports.getFriends = (req, res, next) => {
    const userId = req.params.id;
    query.getFriends(userId, friends => {
        res.send(friends);
    });
}

exports.addFriend = (req, res, next) => {
    const friendUserId = req.body.friendUserId;
    const userId = req.body.userId;
    const friendObject = {friends1_id:userId, friends2_id:friendUserId};
    query.addFriend(friendObject, result => {
        res.send(result);
    });
}