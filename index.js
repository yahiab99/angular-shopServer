const users = require('./routes/users')
const products = require('./routes/products')
const orders = require('./routes/orders')

// Server definitions
const express = require('express')
const cors = require('cors')
var parser = require('body-parser')

const app = express()
const port = 3000;

app.use(cors())
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
app.options('*', cors());

app.get('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
})



app.use('/users2', users)
app.use('/products', products)
app.use('/orders', orders)


// Server API (rest)
app.get('/', (req, res) => {
    res.send(`Hello World!`)
    
})

// START SERVER
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

