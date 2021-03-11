const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const query = require('./database/queries');

const populate = require('./model/populate');

const PORT = process.env.PORT || 5000 // So we can run on heroku || (OR) localhost:5000

const app = express();

app.set('view engine', 'ejs')
.set('views', __dirname)
.get('/getUsers', (req, res, next) => {
  query.selectAllFromUsers(function(result){
    // console.log(result);
        const tempArr = [];
        for (var i = 0; i < result.length; i++){
            tempArr.push(result[i])
        }
        console.log(tempArr)
      const arr = tempArr
      console.log(arr[0].user_first_name);
      res.send(arr)
    // res.render('./views/display',{
    //     pageTitle: 'Users',
    //     users: arr
    // });
    
})})
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
.listen(PORT, () => console.log(`Listening on ${ PORT }`));