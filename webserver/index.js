const express = require('express')

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/health', function (req, res) {
    res.send('OK! ');
  })

app.get('/name', function (req, res) {
    res.send('Taweewat')
  })
  
app.listen(3000, function () {
   console.log('Example app listening on port 3000!')
})