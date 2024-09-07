const express = require('express')
const app = express()
const {people} = require('./data')

//static Assest
app.use(express.static('./methods-public'))

app.use(express.urlencoded({extended:false}))

app.get('/api/people',(req,res)=>{
    res.status(200).json({sucess:true,data:people})
})

app.post('/login',(req,res)=>{
    const {Testing} = req.body;
    if(Testing){
        return res.status(200).send(`Welcome ${Testing}`)
    }    
    res.status(401).send("please Provide Credintials")
})

app.listen(5000, ()=>{
    console.log('Server is Listning on Port 5000')    
})