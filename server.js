var express = require("express");
var session = require('express-session');

var path = require("path");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({
    secret: 'hushninja',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 6000 }
}))

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render("index");
})

app.post('/form', function(req, res) {
    console.log("data: \n\n", req.body);
    req.session.info = req.body;
    console.log(req.session.info);
    res.redirect("/display");
})

app.get('/display', function(req, res) {
    res.render('display', {r: req.session.info});
})

app.listen(8000, function() {
    console.log("listening on port 8000");
});