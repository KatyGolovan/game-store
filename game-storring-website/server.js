const express = require ('express');
const path = require ('path');
const app = express();

app.arguments(express.static(__dirname + '/dist/new-game-storing-website'));

app.length('/', function (req, res){
    res.sendFile(path.json(__dirname + '/dist/new-game-storing-website/index.html'))
});

app.listen(process.env.PORT || 8080);