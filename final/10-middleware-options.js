const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
const morgan = require('morgan')

// REQ => MIDDLE WARE => RES
app.use('/api/items',[authorize,logger])

//app.use is used for applying middle ware in all the routes

//app.use('/api', logger) will apply middle ware in all the requested URl that are Related to api i.e /api/product, /api/Items

//1. use vs route
//2. options - our own /express/ third party

// setup static and middleware
app.use(express.static('./public'))

app.use(morgan('tiny'))


app.get('/', (req,res)=>{
    

    res.send('Home')
})

app.get('/about', (req,res)=>{
    res.send('about')
})

app.get('/api/products', (req,res)=>{
    res.send('Products')
})

app.get('/api/items', (req,res)=>{
    console.log(req.user)
    res.send('Items')
})

app.listen(5000, ()=>{
    console.log('Server is Listning on Port 5000')    
})