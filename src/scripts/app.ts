const request = require('request')
const key = 'c242c34c44da42728b9854bb8aa9a08e';
const country = 'at';
const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${key}`;

declare var ko: any;

// Here's my data model
/* export class ViewModel {
    firstName: any;
    lastName: any;
    fullName: any;

    constructor(first: string, last: string) {
        this.firstName = ko.observable(first);
        this.lastName = ko.observable(last);

        this.fullName = ko.pureComputed(() => {
            // Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
            return this.firstName() + " " + this.lastName();
        }, this);
    };
}

ko.applyBindings(new ViewModel("Planet", "Earth")); */ // This makes Knockout get to work
// End of data model

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

/* https://newsapi.org/v2/everything?q=keyword&apiKey=c242c34c44da42728b9854bb8aa9a08e */