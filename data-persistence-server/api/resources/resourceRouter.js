const resources = require('./resourceModel.js');

const router = require('express').Router();


router.get('/', async (req, res, next) => {
  try {
    const list = await resources.find();
    if(list) {
      res.status(200).json(list);
    } else {
      res.status(404).json({message: 'No Resources found!'})
    }
  } catch (err) {
    res.status(500).send(`${err.message} ${err.stack}`);
  }
  
  next();
})


router.get('/:id', async (req, res, next) => {
  try {
    const resource = await resources.findById(req.params.id);
    if(resource) {
      res.status(200).json(resource);
    } else {
      res.status(404).json({message: 'Resource with the specified ID does not exist!'})
    }
  } catch (err) {
    res.status(500).send(`${err.message} ${err.stack}`);
  }

  next();
})

module.exports = router;