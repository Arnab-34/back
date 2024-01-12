require ('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/x', (req,res) => {
    res.send('tweeterxhfd')
})
app.get('/looog', (req,res) => {
  res.send('twed')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
