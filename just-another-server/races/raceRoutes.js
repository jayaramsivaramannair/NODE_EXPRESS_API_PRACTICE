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

router.get('/', auth, (req, res) => {
  const races = ['human', 'elf', 'hobbit', 'wizard', 'dwarf', 'orc'];

  res.status(200).json(races);
})

module.exports = router;