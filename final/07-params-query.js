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
    return res.json(singleProduct)
})

app.get('/api/products/:productID/review/:reviewID', (req,res)=>{
    console.log(req.params);
    res.send('Hello World')
    
})

app.get('/api/huhu/bubu', (req,res)=>{

    console.log(req.query);
    const {search,limit} = req.query
    let sortedproduct = [...products]

    if(search){
        sortedproduct = sortedproduct.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedproduct = sortedproduct.slice(0,Number(limit))
    }
    if(sortedproduct.length < 1){
        // res.status(200).send('product not found')
        return res.status(200).json({sucess : true, data : []})
    }
    return res.status(200).json(sortedproduct)
    // return here is not mendadtory
    
})

app.listen(5000, ()=>{
    console.log('Server is Listning on Port 5000')    
})