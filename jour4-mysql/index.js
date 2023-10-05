const express = require("express");

const app = express();

const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'nouveau'
})



app.get("/", function(req, rep){
    //connection.connect() 
    const data = []
    connection.query('SELECT * FROM users', (err, rows, fields) => {
        if (err) throw err
        rows.forEach(function(ligne){
            data.push(ligne) 
        })
        rep.json(data);
      })
      
     /*  connection.end(function(){ 
        console.log("fin")
      }) */

    
})



app.listen(9999, function(){
    console.log("l'API écoute sur le port 9999")
})