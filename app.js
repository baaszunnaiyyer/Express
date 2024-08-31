const http = require('http')
const {readFileSync} = require('fs')

const homePage = readFileSync('./navbar-app/index.html')
const styles = readFileSync('./navbar-app/styles.css')
const imagesLogo = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')


const server = http.createServer((req,res)=>{

const url = req.url
console.log(url);

    if(url === '/'){
        res.writeHead(200, {'content-type' : 'text/html'})
        res.write(homePage)
        res.end()
    }

    // Styles of the app

    if(url === '/styles.css'){
        res.writeHead(200, {'content-type' : 'text/css'})
        res.write(styles)
        res.end()
    }
    //Logo Image of the App
    if(url === '/logo.svg'){
        res.writeHead(200, {'content-type' : 'image/svg+xml'})
        res.write(imagesLogo)
        res.end()
    }

    if(url === '/browser-app.js'){
        res.writeHead(200, {'content-type' : 'text/html'})
        res.write(homeLogic)
        res.end()
    }
    

})

server.listen(5000)

console.log('Express Tutorial')
