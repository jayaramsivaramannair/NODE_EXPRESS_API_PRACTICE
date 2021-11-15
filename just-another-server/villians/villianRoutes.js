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
  const villians = ['Sauron', 'Smaug', 'The Balrog', 'Saruman', 'The Witch King of Angmar', 'The Nazgul', 'Azog - The Defiler'];

  res.status(200).json(villians);
})

module.exports = router;