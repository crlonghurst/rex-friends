const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const query = require('./database/queries');
const cors = require('cors');

const PORT = process.env.PORT || 5000 // So we can run on heroku || (OR) localhost:5000

const app = express();

app.set('view engine', 'ejs')
.use(cors())
.set('views', __dirname)
.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", '*'); //<-- you can change this with a specific url like http://localhost:4200
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
})
// Route for the API that gives every user that is in the database in JSON format.
.get('/getUsers', (req, res, next) => {
  query.selectAllFromUsers(function(result){

    // console.log(result);
        const tempArr = [];
        for (var i = 0; i < result.length; i++){
            tempArr.push(result[i])
        }
        // console.log(tempArr)
      const arr = tempArr
      // console.log(arr[0].user_first_name);
      res.send(arr)
    // res.render('./views/display',{
    //     pageTitle: 'Users',
    //     users: arr
    // });
    
})})
// Route for the API that gives every post that is in the database.
.get('/getPosts', (req, res, next) => {
  query.selectAllFromPosts(function(result){
    // console.log(result);
        const tempArr = [];
        for (var i = 0; i < result.length; i++){
            tempArr.push(result[i])
        }
        console.log(tempArr)
      const arr = tempArr
      res.send(arr)
    // res.render('./views/display',{
    //     pageTitle: 'Users',
    //     users: arr
    // });
    
})})
// Route that allows for inserting a new Post.
.post('/insertPost', (req,res,next)=>{
  console.log(req.headers);
  const post = {
    users_id: req.headers.users_id,
    group_id: req.headers.group_id,
    post_title: req.headers.post_title,
    post_content: req.headers.post_content,
    posted_date: req.headers.posted_date,
    favorited: req.headers.favorited
  }
  console.log(post);
  query.insertNewPost(post, function(result){
    console.log(result);
  })
})
// Route that allows a user to follow a group.
.post('/followGroup', (req,res,next)=>{
  console.log(req.headers.groups_id)
  query.followGroup(req.headers.groups_id, req.headers.user_id,function(result){

  })
})
// Route that allows for a new user.
.post('/insertUser', (req,res,next)=>{
  const user = {
    user_first_name: req.headers.user_first_name,
    user_last_name: req.headers.user_last_name,
    username: req.headers.username,
    user_password: req.headers.user_password
  }
  query.getOneUser(user.username, function(result){
    console.log(result);
    if(result > 0){
      return res.send('That username already exists.');
    }
    else{
      query.insertNewUser(user, function(result){
        res.send(result);
      })
    }
  })
})
.listen(PORT, () => console.log(`Listening on ${ PORT }`));