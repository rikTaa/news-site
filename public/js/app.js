"use strict";
const request = require('request');
const key = 'c242c34c44da42728b9854bb8aa9a08e';
const country = 'at';
const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${key}`;
request({ url: url, json: true }, (error, response) => {
    for (let i = 0; i <= 2; i++) {
        let path = response.body.articles[i];
        let name = path.source.name;
        let article = path.publishedAt;
        let title = path.title;
        let description = path.description;
        let image = path.urlToImage;
        let url = path.url;
        let author = path.author;
        article = document.getElementById("article");
        console.log(name);
        console.log(article);
        console.log(title);
        console.log(description);
        console.log(image);
        console.log(url);
        console.log(author);
        console.log(" ");
    }
});
/* https://newsapi.org/v2/everything?q=keyword&apiKey=c242c34c44da42728b9854bb8aa9a08e */ 
