const express = require('express')
const fs = require('fs')
const vm = require('vm')

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

    const template = fs.readFileSync(__dirname + '/index.html')
    const result = vm.runInNewContext('`' + template + '`', {
        'reactcode': req.body})

    res.end(result)
})

app.listen(3000)