const express = require('express');
const router = express.Router();
const { searchOxford } = require('../util/searchOxford.js')

router.get('/oxford_search', (req, res) => {
  console.log('req.query :', req.query);
  const q = req.query.query;
  console.log('q :', q);
  searchOxford(q)
  .then(result => {
    console.log(`Result in routes.js is ${result}`);
    res.send(result);
  })
  .catch(e => {
    console.error(e);
    res.status(404).end();
  })
  
})


module.exports = router