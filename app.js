var express=require('express');
var app = require('express')();
var http = require('http').Server(app);
const ejs=require('ejs');
app.set('view engine','ejs');
app.use(express.static(__dirname +'/public'));

app.get('/',function(req,res){
    res.render('home');
})
http.listen(3000, function() {
    console.log('listening on *:3000');
 });