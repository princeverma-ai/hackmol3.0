const express=require('express');
const Router=require('./router/router')
const app=express();

app.use(express.json());


module.exports=app;
