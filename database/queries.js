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
        return callBack(row);
      })
    
  }
  
  exports.insertNewUser = (user) =>{
      console.log(user);
    let sql = 'INSERT INTO users (user_first_name,   user_last_name,   username,   user_password) VALUES (?)';
      con.query(sql,[user],function(err,result,fields){
        if(err) throw err;
  
        console.log(result);
      })
  }


  exports.insertNewPost = (post) =>{
      const newPost = {
        users_id = post.users_id,
        post_title = post.post_title,
        post_content = post.post_content,
        posted_date = post.posted_date
      }
    let sql = 'INSERT INTO posts (users_id, post_title, post_content, posted_date) VALUES (?)';
    con.query(sql,[newPost],function(err,result,fields){
        if(err) throw err;

        console.log(result);
    })
  }


