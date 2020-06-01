// stop spinnig around => {res.end}
//res.send(//is to send some objects of data)

const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const rou = express.Router()


app.listen(process.env.port || 3020)
