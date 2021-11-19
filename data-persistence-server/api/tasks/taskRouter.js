const tasks = require('./taskModel.js');

const router = require('express').Router();


router.get('/', async (req, res, next) => {
  try {
    const list = await tasks.find();
    if(list) {
      res.status(200).json(list);
    } else {
      res.status(404).json({message: 'No Tasks found!'})
    }
  } catch (err) {
    console.log(err.stack);
  }
  
  next();
})


router.get('/:id', async (req, res, next) => {
  try {
    const task = await tasks.findById(req.params.id);
    if(task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({message: 'Task with the specified ID does not exist!'})
    }
  } catch (err) {
    console.log(err.stack);
  }

  next();
})

module.exports = router;