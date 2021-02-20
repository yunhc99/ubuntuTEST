var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = require('./router/index');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');
var flash = require('connect-flash');

var port = 9000;

app.listen(port, function() { //3000포트 비동기 콜백 함수 맨뒤에 실행
    console.log("start! express server on port " + port);
});

app.use(express.static('html')); //폴터 정적(static)처리
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
//해당 폴더에 있는 이미지, js 불러오기 가능

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(router);