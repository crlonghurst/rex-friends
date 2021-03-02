const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql')

const PORT = process.env.PORT || 5000 // So we can run on heroku || (OR) localhost:5000

const app = express();



app.use(express.static(path.join(__dirname, 'public')))
.get('/', (req, res, next) => {
res.render('pages/index', {title: 'Welcome to my CSE341 repo', path: '/'});
    })
   .use((req, res, next) => {
     // 404 page
     res.render('pages/404', {title: '404 - Page Not Found', path: req.url})
   })
   .listen(PORT, () => console.log(`Listening on ${ PORT }`));