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
    res.send("orders Data is running.....");
});




sale = []
order = []

router.get('/sale', (req, res) => {
    res.send(sale);
})
router.get('/sale1', (req, res) => {
    connection.query("SELECT productName, price, image FROM products where category = '1' ", function (err, result, fields) {
        res.send(JSON.stringify(result))
        // console.log(result[1].productName)
    });
})
router.get('/addSale', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.push({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/removeSale', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.pop({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/addSale1', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.push({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/removeSale1', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.pop({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/addSale2', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.push({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/removeSale2', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.pop({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/addSale3', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.push({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/removeSale3', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.pop({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/addSale4', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.push({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/removeSale4', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.pop({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/addSale5', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.push({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/removeSale5', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.pop({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/addSale6', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.push({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/removeSale6', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.pop({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/addSale7', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.push({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/removeSale7', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.pop({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/addSale8', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.push({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/removeSale8', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.pop({i1,title1,price1,image1});
    res.send(sale);
})

//cards1
router.get('/addS', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.push({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/removeS', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.pop({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/addS1', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.push({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/removeS1', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.pop({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/addS2', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.push({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/removeS2', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.pop({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/addS3', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.push({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/removeS3', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.pop({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/addS4', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.push({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/removeS4', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.pop({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/addS5', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.push({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/removeS5', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.pop({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/addS6', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.push({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/removeS6', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.pop({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/addS7', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.push({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/removeS7', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.pop({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/addS8', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.push({i1,title1,price1,image1});
    res.send(sale);
})
router.get('/removeS8', (req, res) => {
    const i1 = req.query.i
    const title1 = req.query.title
    const price1 = req.query.price;
    const image1 = req.query.image
    sale.pop({i1,title1,price1,image1});
    res.send(sale);
})

module.exports = router; 