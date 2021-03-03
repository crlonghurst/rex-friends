var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "clonghurst",
//   password: "",
//   database: "rexfriends"
// });

var con = mysql.createConnection({
  host: "johnny.heliohost.org",
  user: "rugarug_rexfriends",
  password: "cse341Team4",
  database: "rugarug_rexfriends"
});

//username: rexfriends
//password: cse341Team4
function selectAllFromUsers(){
  console.log(con.host)
  con.connect(function(err) {
    if (err) throw err;
      con.query("SELECT * FROM users;", function(err,result,fields){
        if (err) throw err;
        console.log(result);

      })
  });
}

function selectAllFromPosts(){
  con.connect(function(err){
    if(err)throw err;
    con.query("SELECT * FROM posts;", function(err,result,fields){
      if(err)throw err;
      console.log(result);
    })
  });
}



function insertNewUser(firstName, lastName, username, user_password){
  const user = [firstName, lastName, username, user_password];
  let sql = 'INSERT INTO users (user_first_name,   user_last_name,   username,   user_password) VALUES (?)';
  con.connect(function(err){
    if(err)throw err;
    con.query(sql,[user],function(err,result,fields){
      if(err) throw err;

      console.log(result);
    })
  });
}
// insertNewUser('Russell', 'Nelson', 'prophet', '1stPresProphet');
selectAllFromUsers();
//selectAllFromPosts();
/*
HelioHost 
username: rugarug
password: cse341Team4
*/