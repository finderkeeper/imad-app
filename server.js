var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
     'article-one' : {
    title : 'Article One | Sanjana Srinivas',
    heading:'Article-Onne',
    date: '9th September, 2017',
    content:`<p> This is my first article on this website. I have to pick up pace and finish watching the videos. This is my first article on this website. I have to pick up pace and finish watching the videos.This is my first article on this website. I have to pick up pace and finish watching the videos.This is my first article on this website. I have to pick up pace and finish watching the videos.
            </p>
            
            <p> This is my first article on this website. I have to pick up pace and finish watching the videos. This is my first article on this website. I have to pick up pace and finish watching the videos.This is my first article on this website. I have to pick up pace and finish watching the videos.This is my first article on this website. I have to pick up pace and finish watching the videos.
            </p>
            
            <p> This is my first article on this website. I have to pick up pace and finish watching the videos. This is my first article on this website. I have to pick up pace and finish watching the videos.This is my first article on this website. I have to pick up pace and finish watching the videos.This is my first article on this website. I have to pick up pace and finish watching the videos.
            </p>`
    
},
     'article-two' : { 
        title: 'Article-Two | Sanjana Srinivas',
  heading: 'Article-Two',
  date: '10th September, 2017',
  content:
  ` <p> This is my second article for my webapp. I'm currently improving content.
            </p>`
            
           
    },
     'article-three' : {
        title: 'Article-Three | Sanjana Srinivas',
  heading: 'Article-Three',
  date: '11th September, 2017',
  content:
  `<p> This is my third article. Working on JS objects.
            </p>`
            
    
    }
};
function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = 
    `<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <style>
           
        </style>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
         <div>
            <a href="/">Home</a>
         </div>
         <hr/>
         <h3> ${heading}</h3>
        
         <div>
            ${date}
         </div>
        
         <div>
           ${content}
         </div>
    </div>
    </body>
</html>`;

return htmlTemplate;
    
}








app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req,res){
  var articleName = req.params.articleName;
  res.send(articles[articleName]);
});

app.get('/article-two', function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
