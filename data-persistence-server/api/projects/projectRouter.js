const projects = require('./projectModel.js');

const router = require('express').Router();


router.get('/', async (req, res, next) => {
  try {
    const list = await projects.find();
    res.status(200).json(list);

  } catch (err) {
    console.log(err.stack);
  }
  
  next();
})

module.exports = router;

