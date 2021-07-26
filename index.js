const express = require('express')
const fs = require('fs')
const vm = require('vm')

const app = express()
app.use(express.json({type: 'application/json'}));

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

    console.log(req.body)
    
    const template = fs.readFileSync(__dirname + '/index.html')
    //const templateText = template.toString().replace('$reactcode', '${reactcode}')

    const result = vm.runInNewContext('`' + template + '`', {
        'reactversion': req.body.version,
        'reactcode': req.body.code})

    res.end(result)
})

app.listen(3000)