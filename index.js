/*
    Learing EJS on EXPRESS AND ADDING BOOTSTRAP

    mkdir public 
    mkdir public/css public/js

    Download bootstrap:
    https://getbootstrap.com/docs/4.0/getting-started/download/
    CSS and JS copy and paste in my directory css and js
    
    Also, you need a jQuery
    https://jquery.com/download/
    and send to js file

    Then we can add components in JS
    https://getbootstrap.com/docs/4.0/components/alerts/

*/





const express = require('express');
const app = express();
const path = require('path');
/*
    Adding data with a file data.json
*/
const redditData = require('./data.json');
//console.log(redditData);
/*
Using CSS with views in JS
*/
//make sure that you create a directory called: public
app.use(express.static(path.join(__dirname,'public')))

/*
Using HTML with views in JS
*/
//have to install ejs : npm i ejs
//make sure that you create a directory called: views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use
app.get('/', (req, res)=>{
   // res.send("hi");
   res.render('home.ejs');
})

//https://www.linkedin.com/in/viniciusbiesuz/
app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    console.log(data);
    //res.render('subreddit', {subreddit});
    res.render('subreddit', {...data});//"..." let me acess individual properter of object
})


app.get('/random', (req,res) =>{
    const num = Math.floor(Math.random() * 10) +1;
    res.render('random.ejs',{rand:num});
})

app.listen(3000 ,() =>{
    console.log("Listening on PORT 3000 ");
})