const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
app.use(express.static('./public'))

// 
// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
//     adding to static assets
//     SSR
// })

app.get('*',(req,res)=>{
       res.status(404).send('<h1>Resource Not Found</h1>') 
})
app.listen(5000, ()=>{
    console.log('Server is listning on port 5000')
})


// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen