var express = require('express');
var mysql = require("mysql");
var router = express.Router();

//-- Define SQL Connection
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yahia541999",
  database: "new",
});

connection.connect();

router.get('/', function(req, res, next) {
    res.send("Products Data is running.....");
  });

router.get('/products1', (req, res) => {
    connection.query("SELECT * FROM products where category = '1' ", function (err, result, fields) {
        res.send(JSON.stringify(result))
    });
    
})
router.get('/products2', (req, res) => {
    connection.query("SELECT * FROM products where category = '2' ", function (err, result, fields) {
        res.send(JSON.stringify(result));
    });
})  

module.exports = router; 