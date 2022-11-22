// const express = require('express')
// const breads = express.Router()
const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
// INDEX
breads.get('/', (req, res) => {
    res.render('Index',
      {
        breads: Bread
      }
    )
  // res.send(Bread)
})


// INDEX
// breads.get('/', (req, res) => {
//   res.send('This is the index at /breads')
// })

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
  })
  
module.exports = breads
