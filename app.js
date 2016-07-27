

var mongoose = require('mongoose');
var http = require('http');
var express = require('express');
var fs = require('fs');
var app = express();
var ejs = require('ejs');
//var mongojs = require('mongojs');
//var db = mongojs('localhost:27017/memo');
var connect = require('connect');
var db = require('mongojs')('memo', ['TB_DATA']);

function get(path, cd) {
    return function (require, response, next) {
        if (require.method != 'GET' || require.url != path)
            return next();
        cd(require, response, next);
    }
}
//메인페이지에서 접속할 때 페이지
/*
app.get('/', function(require, response){
	fs.readFile('./public/index.html', function(err, data){
		response.writeHead(200, {'Content-type': 'text/html'});
		response.end(data);
	})
} )

app.get('/main', function(require, response, next) {
	fs.readFile('./public/main.html', function(err, data){
		db.TB_DATA.find({}, { name: 1 }, function(err, cursor) {
			response.writeHead(200, { 'Content-type': 'text/html'});
			response.end(ejs.render(data, { data: cursor }));
		});
	});
});*/

var app = connect().use(get('/', function (require, response, next) {
        fs.readFile('public/main.html', 'utf8', function (error, data) {
            db.TB_DATA.find({}, { name: 1 }, function (error, cursor) {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end(ejs.render(data, { data: cursor }));
            });
        });
    })).listen(3000, function () { console.log("서버 연결 : 3000") });

//기본 셋업
//http.createServer(function(request,response) {
	//response.writeHead(200, {
	//'Content-type' : 'text/plain'
	//});
	//response.end('Hello world ssiballlllllll jotgata!!!! ssiballlllllll mother! save me please!');
//}).listen(3000);


//app.listen(3000, function(){
//	console.log('server start');
//});


/*
//메인페이지에서 접속할 때 페이지
app.get('/', function(require, response){
	fs.readFile('./public/index.html', function(err, data){
		response.writeHead(200, {'Content-type': 'text/html'});
		response.end(data);
	})
} )
app.get('/main', function(require, response) {
	fs.readFile('./public/main.html', function(err, data){
		response.writeHead(200, { 'Content-type': 'text/html'});
		response.end(data);
	});
});
*//*


//몽고디비 DB 연결(온라인 리포지토리)
mongoose.connect('mongodb://localhost:27017/test');
var db = mongoose.connection;
db.once("open",function(){
	console.log("mongoDB connected!");
});
db.on("error", function (err) {
	console.log("DB Error : ", err);
});*/


/*
// 몽고디비에 데이터 때려박기
var dataSchema = mongoose.Schema({
	name:String,
	count:Number
});

var Data = mongoose.model('data', dataSchema);

Data.findOne({name:"myData", count:0}, function(err, data){
	if(err) return console.log("Data Error", err);
	if(!data)
	{
		Data.create({name:"myData", count:0}, function(err,data){
			if(err) return console.log("Data Error", err);
			console.log("Counter initialized : ", data);
		})
	}
});*/

console.log('Server is running at http://localhost:3000');

