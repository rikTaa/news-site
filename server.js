const express = require('express')
const request = require('request')
const app = express()

const path = require('path');
const http = require('http');
const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);

const key = 'c242c34c44da42728b9854bb8aa9a08e';
const country = 'at';
const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${key}`;

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

request({ url: url, json: true }, (error, response) => {

    app.set('view engine', 'hbs');

    var first_path = response.body.articles[0];
    var name_1 = first_path.source.name;
    var article_1 = first_path.publishedAt;
    var title_1 = first_path.title;
    var description_1 = first_path.description;
    var image_1 = first_path.urlToImage;
    var url_1 = first_path.url;
    var author_1 = first_path.author;

    var second_path = response.body.articles[1];
    var name_2 = second_path.source.name;
    var article_2 = second_path.publishedAt;
    var title_2 = second_path.title;
    var description_2 = second_path.description;
    var image_2 = second_path.urlToImage;
    var url_2 = second_path.url;
    var author_2 = second_path.author;

    var third_path = response.body.articles[2];
    var name_3 = third_path.source.name;
    var article_3 = third_path.publishedAt;
    var title_3 = third_path.title;
    var description_3 = third_path.description;
    var image_3 = third_path.urlToImage;
    var url_3 = third_path.url;
    var author_3 = third_path.author;

    app.get('', (req, res) => {
        res.render('index', {
            name_1: name_1,
            article_1: article_1,
            title_1: title_1,
            description_1: description_1,
            image_1: image_1,
            url_1: url_1,
            author_1: author_1,

            name_2: name_2,
            article_2: article_2,
            title_2: title_2,
            description_2: description_2,
            image_2: image_2,
            url_2: url_2,
            author_2: author_2,

            name_3: name_3,
            article_3: article_3,
            title_3: title_3,
            description_3: description_3,
            image_3: image_3,
            url_3: url_3,
            author_3: author_3
        })
    })
})

/* https://newsapi.org/v2/everything?q=keyword&apiKey=c242c34c44da42728b9854bb8aa9a08e */