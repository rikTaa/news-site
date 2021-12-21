const express = require('express')
const request = require('request')
const app = express()
const port = 5000
const key = 'c242c34c44da42728b9854bb8aa9a08e';
const country = 'at';
const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${key}`;

app.set('view engine', 'ejs')
app.use(express.static('public'))

request({ url: url, json: true }, (error: any, response: any) => {

    for (let i = 0; i <= 2; i++) {
        let path = response.body.articles[i];
        let name = path.source.name;
        let article = path.publishedAt;
        let title = path.title;
        let description = path.description;
        let image = path.urlToImage;
        let url = path.url;
        let author = path.author;

        console.log(name);
        console.log(article);
        console.log(title);
        console.log(description);
        console.log(image);
        console.log(url);
        console.log(author);
        console.log("--------------------------");
    }
})
