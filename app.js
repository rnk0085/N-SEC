// https://www.sejuku.net/blog/74845
// https://zenn.dev/oreo2990/articles/b4719c78aa0832
const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(3000, () => {
    console.log('ポート3000でリクエスト待受中...');
});

app.get('/', (req, res) => {
    res.render('top');
});
