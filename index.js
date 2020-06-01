// stop spinnig around => {res.end}
//res.send(//is to send some objects of data)

const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const rou = express.Router()
const mongoose = require('mongoose')


const url  = "mongodb://localhost:27017"
mongoose.connect(url, { useNewUrlParser: true ,useUnifiedTopology: true })
const db = mongoose.connection

app.use(bodyparser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(bodyparser.json())
app.use('/api',require('./routes/api'))


rou.get('/api/ninja',(req,res,next)=>{
db.collection('ninjas').aggregate([
{
$geoNear: {
near: { type: "Point", coordinates: [-80,25] },
distanceField: "dist.calculated",
maxDistance: 100000,
query: { category: "Parks" },
includeLocs: "dist.location",
spherical: true
}
}
], (err,docs)=>{
res.json(docs); 
})
}); 

app.listen(process.env.port || 3020)
