const express = require('express')
const fs = require('fs')

const app = express()
app.use(express.text({type: 'text/plain'}));

app.get('/favicon.ico', function(req, res){
    res.writeHead(200)
    res.end()
})

app.get('/', function(req, res){
    res.writeHead(200)
    fs.createReadStream(__dirname + '/main.html').pipe(res)
})

app.post('/react', function(req, res){
    res.writeHead(200)
    //res.end("hello")

    const content = fs.readFileSync(__dirname + '/index.html')
    res.end(content)
})

app.listen(3000)