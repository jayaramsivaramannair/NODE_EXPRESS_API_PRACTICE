const express = require('express');

const router = express.Router();

function auth(req, res, next) {
  if(req.url === '/mellon') {
    //Only if the url contains the mellon route then proceed or else log the message as below
    next();
  } else {
    res.send('You shall not pass!');
  }
}

router.get('/mellon', auth, (req, res) => {
  console.log('Gate opening...');
  console.log('Inside and safe');
  res.send('Welcome Traveler!')
})

module.exports = router;