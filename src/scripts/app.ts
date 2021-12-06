/* https://newsapi.org/v2/everything?q=keyword&apiKey=c242c34c44da42728b9854bb8aa9a08e */
let key = 'c242c34c44da42728b9854bb8aa9a08e';
let keyword: string;
let ws = new WebSocket('GET https://newsapi.org/v2/everything?q=' + keyword + '&apiKey=' + key);