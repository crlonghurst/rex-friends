const { callbackPromise } = require('nodemailer/lib/shared');
const con = require('./db_connection');

exports.selectAllFromUsers = (callBack) => {
        con.query("SELECT * FROM users;", function(err,result,fields){
          if (err) throw err;
          let rows = result;
          return callBack(rows);
          
        })
  }
  
  exports.selectAllFromPosts = (callBack) => {
      con.query("SELECT * FROM posts;", function(err,result,fields){
        if(err)throw err;
        console.log(result);
        let rows = result;
        return callBack(rows)
      })
  }

  exports.selectAllFromGroups = (callBack) => {
    con.query("SELECT * FROM Groups;", function(err, result, fields){
      if(err)throw err;
      console.log(result);
      return callBack(result);
    })
  }

  
  
  exports.getOneUser =(username, callBack) =>{
    let sql = 'SELECT * FROM users WHERE username = ?';
      con.query(sql,[username],function(err,result,fields){
        if(err)throw err;
        let row = result;
        return callBack(result);
      })
    
  }
  
  exports.insertNewUser = (user, callBack) =>{
      console.log(user);
    let sql = 'INSERT INTO users (user_first_name,   user_last_name,   username,   user_password) VALUES (?)';
      con.query(sql,[user],function(err,result,fields){
        if(err) throw err;
        return callBack(result);
      })
  }

  exports.getGroupDataByID = (group_id, callBack) =>{
      let sql = 'SELECT * FROM Groups WHERE group_id = ?';
      con.query(sql, [grou_id], function (err, result, fields){
        if(err) throw err;

        return callBack(result);
      })
  }

  exports.getGroupId = (group_name, callBack)=>{
    let sql = 'SELECT groups_id WHERE groups_name = ?;';
    con.query(sql, [group_name], function(err, result, fields){
      if(err) throw err;

      return callBack(result);
    })
  }

  exports.searchForGroup = (searchValue, callBack) =>{
    let sql = 'SELECT * FROM Groups WHERE groups_name = ? OR groups_description IN (?)';
    con.query(sql, [searchValue], function (err, result, fields){
      if(err) throw err;

      console.log(result);
      return callBack(result);
    })
  }

  exports.followGroup = (group_id, user_id, callBack) =>{
    let sql = 'INSERT INTO user_group (groups_id, user_id) VALUES(?)';
    con.query(sql, [group_id, user_id], function (err, result, fields){
      if(err) throw err;
      console.log(result);
      return callBack(result);
    })
  }

  exports.insertNewPost = (post, callBack) =>{
      const newPost = {
        users_id: post.users_id,
        post_title: post.post_title,
        post_content: post.post_content,
        posted_date: post.posted_date
      }
    let sql = 'INSERT INTO posts (users_id, post_title, post_content, posted_date) VALUES (?)';
    con.query(sql,[newPost],function(err,result,fields){
        if(err) throw err;

        console.log(result);
        return callBack(result);
    })
  }


  exports.addFriend = (friend, callBack) =>{
    const newFriend = {
      friend1id: friend.friends1_id,
      friend2id: friend.friends2_id
    }
    let sql = 'INSERT INTO friends (friend1_id, friend2_id) VALUE (?)';
    con.query(sql, [newFriend], function(err, result, fields){
      if (err) throw err;

      console.log(result);
      return callBack(result);
    })
  }

