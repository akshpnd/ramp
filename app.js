const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const mysql = require("mysql");


const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'order'
  })

  con.connect((err)=>{
    if (err)
    console.log("connection failed")
    else
    console.log("database connected")

  })

  con.query('INSERT INTO `orders`( `title`, `description`) VALUES ("order1","this is the first order")', (err, rows, fields) => {
    if (err)
    console.log("data can not be inserted")
  
    
  })
  

app.listen(3000,(err)=>{
    if(err)
    console.log('server error');
    else
      console.log('server is running');
})