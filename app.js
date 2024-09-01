const express = require('express')
const app = express()
const {products} = require('./data.js')



app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products"> products</a>')
})

app.get('/api/products',(req,res)=>{
    const newProduct = products.map((product)=>{
        const {id,name,image} = product
        return {id, name, image}
    })

    res.json(newProduct)
})

app.get('/api/products/:productsID',(req,res)=>{
    // console.log(req)
    // console.log(req.params)

    const {productsID} = req.params

    const singleProduct = products.find((product)=> product.id == Number(productsID))
    
    if(!singleProduct){
        return res.status(404).send('Product Not Found')
    }
    res.json(singleProduct)
})

app.listen(5000, ()=>{
    console.log('Server is Listning on Port 5000');
    
})