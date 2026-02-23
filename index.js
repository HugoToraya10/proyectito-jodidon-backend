require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT;
app.use(express.static('public'))



app.get('/', function (req, res) {
  res.send('Hola mundo')
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`)
})
