const express = require('express')
const router = express.Router()


const mongoose = require('mongoose')


const url  = "mongodb://localhost:27017"
mongoose.connect(url, { useNewUrlParser: true ,useUnifiedTopology: true })
const db = mongoose.connection


router.get('/ninja',(req,res,next)=>{
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


module.exports  = router