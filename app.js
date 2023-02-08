// https://www.sejuku.net/blog/74845
// https://zenn.dev/oreo2990/articles/b4719c78aa0832
const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// https://qiita.com/tky529/items/515aa38b6f667f6808f8
app.use("/public", express.static("public"));

app.listen(3000, () => {
    console.log('ポート3000でリクエスト待受中...');
});

app.get('/', (req, res) => {
    res.render('top');
});

app.get('/quest/1/details', (req, res) => {
    res.render('quest_details');
});

app.get('/quest/1', (req, res) => {
    res.render('quest_form');
});

app.get('/tab', (req, res) => {
    res.render('tab_page');
});

app.get('/twitter', (req, res) => {
    res.render('like_twitter');
});