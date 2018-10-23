//imports express
const express = require('express')
const app = express()
//sets a port
let port = 3666
//imports the cake data
const cakes = require('./data.json')
//imports body parser
const bodyParser = require('body-parser')


//Before the routes
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))



//get all
app.get('/', (req, res) => {
  res.json(cakes)
})

//custom parameters are stored as keys on req.params
app.get('/:idnum', (req, res) => {
  console.log(req.params.idnum)
  res.json(cakes.filter(cake => cake.id == req.params.idnum))[0]
})

//info user wants to post comes through req.body
app.post('/', (req, res, next) =>{
  const body = req.body
  cakes.push(body)
  res.json({ cakes: cakes})
})


//sets up the server to listen to a port
app.listen(port, () => {
  console.log(`I got you on ${port}`)
  })