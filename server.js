/**
 * Created by HaiderNazir on 1/19/2016.
 */
var express=require('express');
var app=express();
var PORT=3000;
var middleware=require('./middleware.js');

//use this middleware to the whole application routes
app.use(middleware.logger);

/*--Start Routing ---------------*/
app.get('/',function(req,res){

   res.send('Hello Express !!!');
});

/*get the about page*/
app.get('/about',middleware.requireAuthentication,function(req,res){
    res.send('from About Us!');
});

/*
 -
 start serving static web pages
 */
app.use(express.static(__dirname+'/public'));



/*-------Listen to the Port ------------*/
app.listen(PORT,function(){
    console.log('Express Started on PORT '+PORT +'!!');
});

