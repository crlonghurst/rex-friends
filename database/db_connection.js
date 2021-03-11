var mysql = require('mysql2');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "clonghurst",
//   password: "",
//   database: "rexfriends"
// });

module.exports = mysql.createConnection({
  host: "johnny.heliohost.org",
  user: "rugarug_rexfriends",
  password: "cse341Team4",
  database: "rugarug_rexfriends"
});

//username: rexfriends
//password: cse341Team4



// insertNewUser('Russell', 'Nelson', 'prophet', '1stPresProphet');
// selectAllFromUsers(function(result){
//   Object.keys(result).forEach(function(key){
//     var results = result[key];
//     console.log(results.user_first_name, results.user_last_name);
//   })
// });

// getOneUser(5,function(result){
//   console.log(result[0].user_first_name+" "+result[0].user_last_name);
// })
//selectAllFromPosts();
/*
HelioHost 
username: rugarug
password: cse341Team4
*/