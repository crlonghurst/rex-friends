const assert = require('assert');
const con = require('./db_connection');

exports.selectAllFromUsers = (callBack) => {
        con.query("SELECT * FROM users;", function(err,result,fields){
          if (err) throw err;
          return callBack(result);
          
        })
  }
  
  exports.selectAllFromPosts = (callBack) => {
      con.query("SELECT * FROM posts;", function(err,result,fields){
        if(err)throw err;
        console.log(fields[1][0]);
        let rows = result;
        return callBack(rows)
      })
  }

  exports.selectAllFromGroups = (callBack) => {
    con.query("SELECT * FROM Groups;", function(err, result, fields){
      if(err)throw err;
      const row = res.json(result);
      console.log(row[0][0].users_id);
      return callBack(row);
    })
  }

  
  
  exports.getOneUser =(username, callBack) =>{
    // This database
    assert(typeof(username) == typeof('string'))
    let sql = 'SELECT * FROM users WHERE username = ?';
      con.query(sql,[username],function(err,result,fields){
        if(err)throw err;
        return callBack(result.length);
      })
  }
  
  exports.insertNewUser = (user, callBack) =>{
    // These four asserts check the user that is passed to make sure all the fields are strings because that is what the database expects.
    // If these are not strings make sure they are since that is what the database expects.
    assert(typeof(user.user_first_name) == typeof('str'));
    assert(typeof(user.user_last_name) == typeof('str'));
    assert(typeof(user.username) == typeof('str'));
    assert(typeof(user.user_password) == typeof('string'));
    let sql = 'INSERT INTO users (user_first_name,   user_last_name,   username,   user_password) VALUES (?,?,?,?)';
      con.query(sql,
        [
          user.user_first_name, 
          user.user_last_name, 
          user.username, 
          user.user_password
        ],
          function(err,result,fields){
        if(err) throw err;
        return callBack(result);
      })
  }

  exports.getCommentsByPost = (post_id) =>{
    assert(typeof(post_id) == typeof(1))
    let sql = 'GET * FROM comments WHERE post_id = ?'
    con.query(sql, [post_id], function(err, result, fields){
      if(err) throw err;

      return fields;
    })
  }

  exports.getGroupDataByID = (group_id, callBack) =>{
    // If this assert fires then we know that the group_id isn't being seen as an integer, but it needs to be for the database.
    assert(typeof(group_id) == typeof(1));
      let sql = 'SELECT * FROM Groups WHERE group_id = ?';
      con.query(sql, [group_id], function (err, result, fields){
        if(err) throw err;

        return callBack(result);
      })
  }

  exports.getGroupId = (group_name, callBack)=>{
    // If this assert fires then the group_name is some sort of datatype other than string.
    assert(typeof(group_name) == typeof('string'));
    let sql = 'SELECT groups_id WHERE groups_name = ?;';
    con.query(sql, [group_name], function(err, result, fields){
      if(err) throw err;

      return callBack(result);
    })
  }

  exports.searchForGroup = (searchValue, callBack) =>{
    // If this assert fires go back to the route check if the searched value is being interpreted as a string.
    // If it is not change it so it is, that is the only way to search in the database.
    assert(typeof(searchValue) == typeof('string'));
    let sql = 'SELECT * FROM Groups WHERE groups_name = ? OR groups_description IN (?)';
    con.query(sql, [searchValue], function (err, result, fields){
      if(err) throw err;

      console.log(result);
      return callBack(result);
    })
  }

  exports.followGroup = (groups_id, user_id, callBack) =>{
    console.log('followGroup');
    // If either of these asserts fire then go back to the route and make sure you are passing in integers.
    // These two asserts make sure the data can be added into the database.
    assert(groups_id != typeof(1));
    assert(user_id != typeof(1));
    console.log(groups_id)
    let sql = 'INSERT INTO user_group (groups_id, user_id) VALUES(?,?)';
    con.query(sql, [groups_id, user_id], function (err, result, fields){
      if(err) throw err;
      console.log(result);
      return callBack(result);
    })
  }

  exports.insertNewPost = (post, callBack) =>{

    let sql = 'INSERT INTO posts (users_id, user_name, group_id, group_name, post_title, post_content, posted_date, favorited) VALUES (?,(SELECT username FROM users WHERE users_id = ?), ?, (SELECT groups_name FROM Groups WHERE groups_id = ?),?,?,?,?)';
    con.query(sql,
      [
        post.users_id,
        post.users_id,
        post.group_id,
        post.group_id,
        post.post_title,
        post.post_content,
        post.posted_date,
        post.favorited
      ]
      ,function(err,result,fields){
        if(err) throw err;

        console.log(result);
        return callBack(result);
    })
  }


  exports.addFriend = (friend, callBack) =>{
    const newFriend = {
      friend1_id: friend.friends1_id,
      friend2_id: friend.friends2_id
    }
    let sql = 'INSERT INTO friends (friend1_id, friend2_id) VALUE (?)';
    con.query(sql, [newFriend], function(err, result, fields){
      if (err) throw err;

      console.log(result);
      return callBack(result);
    })
  }

  exports.getFriends = (user_id, callBack) =>{
    //If this assert fires then user_id is most likely a string that needs to be type casted.
    assert(typeof(user_id) == typeof(1));
    let sql = 'SELECT * FROM friends WHERE friend1_id = ? OR friend2_id = ?';
    con.query(sql, [user_id], function(err, result, fields){
      if(err) throw err;

      return callBack(result);
    })
  }

  exports.deleteUserPosts = (users_id, callBack)=>{

    assert(typeof(users_id) == typeof(1));
    let sql = 'DELETE FROM posts WHERE users_id = ?';
    con.query(sql, [users_id], function(err, result, fields){
      if(err) throw err;

      return callBack(result);
    })
  }


  exports.updateUser = (users_id, user_first_name, user_last_name, username, user_password, callBack)=>{
    assert(typeof(users_id) == typeof(1))
    assert(typeof(user_first_name) == typeof('str'))
    assert(typeof(user_last_name) == typeof('str'))
    assert(typeof(username) == typeof('str'))
    assert(typeof(user_password) == typeof('str'))

    let sql = 'UPDATE users SET user_first_name = ?, user_last_name = ?, username = ?, user_password = ? WHERE users_id = ?';
    con.query(sql, 
      [
        user_first_name,
        user_last_name,
        username,
        user_password,
        users_id
      ], function(err,result, fields){
        if(err) throw err;
        return callBack(result);
      })
  }