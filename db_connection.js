var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "clonghurst",
  password: "",
  database: "rexfriends"
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

selectAllFromPosts();
