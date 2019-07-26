// const express = require('express') 
import express from 'express'
import mongoose from 'mongoose'
const userModel = require('./model/User')
let app = express();
app.listen(3000,'localhost',()=>(
  console.log("Server is running on host 3000")
))
app.get('/',(req,res)=>{    
  res.send('Node is working')
})
app.get('/nha',(req,res)=>{
  res.send('router nha')
})
console.log(userModel);
