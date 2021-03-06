'use strict'

const mysql = require('mysql');
const express = require('express');
const app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'imanoodle',
    database: 'exam'
  });
  
  connection.connect(function(err) {
    if(err){
      console.log('Error connecting to database oooh');
      return;
    }
    console.log('Connection established woooo');
  });


app.use(express.json());
app.use('/', express.static('./assets'));


app.get('/search', function(req, res) {
    let querySearch = req.query;
    if (querySearch !== null) {
        connection.query('SELECT * FROM licence_plates WHERE plate="' + querySearch.q + '";', function(err, result) {
            if(err) {
                console.log(err.toString());
              }
              res.json(result);
        });
    }
    else {
        connection.query('SELECT * FROM licence_plates;', function(err, result) {
            if(err) {
                console.log(err.toString());
              }
              res.json(result);
        });
    }
});


app.get('/search/:brand', function(req, res) {
    let carBrand = req.params.brand;
    connection.query('SELECT * FROM licence_plates WHERE car_brand="' + carBrand + '";', function(err, result) {
        if(err) {
            console.log(err.toString());
          }
          res.json(result);
    });
});


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');    
});

app.listen(8080, function() {
    console.log('server is up on port 8080, good to go!')
});

