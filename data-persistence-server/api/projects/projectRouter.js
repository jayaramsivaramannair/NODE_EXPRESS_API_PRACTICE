const projects = require('./projectModel.js');

const router = require('express').Router();


router.get('/', async (req, res, next) => {
  try {
    const list = await projects.find();
    if(list) {
      res.status(200).json(list);
    } else {
      res.status(404).json({message: 'No Projects found!'})
    }
  } catch (err) {
    res.status(500).send(`${err.message} ${err.stack}`);
  }
  
  next();
})


router.get('/:id', async (req, res, next) => {
  try {
    const project = await projects.findById(req.params.id);
    if(project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({message: 'Project with the specified ID does not exist!'})
    }
  } catch (err) {
    res.status(500).send(`${err.message} ${err.stack}`);
  }

  next();
})

module.exports = router;

