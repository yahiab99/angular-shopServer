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
    res.send("Users Data is running.....");
  });


router.get("/users1", (req, res) => {
    connection.query("SELECT firstName, userName, userPassword FROM users", function (err, result, fields) {
      res.send(JSON.stringify(result));
    });
});
router.get("/users2", (req, res) => {
  const userinput = req.query.userinput
  connection.query(`SELECT firstName FROM users where userName = '${userinput}'`, function (err, result, fields) {
    res.send(JSON.stringify(result));
  });
});

router.post("/addUsers2", (req, res) => {
  const user = req.body
  const insert = `insert into users values('${user.id}','${user.firstName}','${user.lastName}','${user.phone}','${user.mail}','${user.userName}','${user.userPassword}','${user.city}','${user.address}','${user.street}')`;
  connection.query(insert, function (err, result, fields) {
      res.send(JSON.stringify(result));
  });
});    

module.exports = router;  