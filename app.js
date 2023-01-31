// https://www.sejuku.net/blog/74845
// https://zenn.dev/oreo2990/articles/b4719c78aa0832
const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('ポート3000でリクエスト待受中...');
});

app.get('/', (req, res) => {
    res.send("Hello World");
});
