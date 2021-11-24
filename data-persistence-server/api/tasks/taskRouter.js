const tasks = require('./taskModel.js');

const router = require('express').Router();

/** 
 * @swagger
 * 
 * components: 
 *   schemas:
  *    tasks:
    *     type: object
      *     required:
      *       - task-description
      *       - project-id
      *     properties:
      *       task-id: 
      *        type: integer
      *        description: Auto-incrementing ID for each task
      *       task-description:
      *         type: string
      *         description: Name of the task 
      *       task-notes: 
      *         type: string
      *         description: Notes for the task
      *       task-completed:
      *          type: boolean
      *          description: Whether the task is completed or not
      *       project-id:
      *          type: integer 
      *          description: ID of the project the task belongs to
      *     example:
      *      task-id: 1
      *      task-description: "Reach out to Bilbo and convince him to hand over the ring"
      *      task-notes: null
      *      task-completed: false
      *      project-id: 1
      *      
*/

/**
 * @swagger
 * tags: 
 *   name: Tasks
 *   description: API for managing tasks
 * 
 */

/**
 * @swagger
 * /api/tasks:
 *    get:
 *      summary: Returns a list of all project related tasks
 *      tags: [Tasks]
 *      responses:
 *        200:
 *         description: An array of tasks
 *         content:
 *           application/json:
 *            schema:
 *              type: array 
 *              items:
 *                $ref: '#/components/schemas/tasks'
 *                 
 */



router.get('/', async (req, res, next) => {
  try {
    const list = await tasks.find();
    let modifiedTasks = [];
    if(list) {
      modifiedTasks = list.map(task => {
        return {...task, 'task-completed' : (task['task-completed']) ? true : false }
      })
      console.log(modifiedTasks)
      res.status(200).json(modifiedTasks);
    } else {
      res.status(404).json({message: 'No Tasks found!'})
    }
  } catch (err) {
    res.status(500).send(`${err.message} ${err.stack}`);
  }
})

/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *    summary: Get the task by specified task-id
 *    tags: [Tasks]
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: id of the task
 *    responses: 
 *        200:
 *         description: Listing of task with the specified task-id
 *         content:
 *           application/json:
 *              schema: 
 *                $ref: '#/components/schemas/tasks'  
 *        404:
 *          description: Task with the specified ID does not exist! 
 * 
 */


router.get('/:id', async (req, res, next) => {
  try {
    const task = await tasks.findById(req.params.id);
    if(task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({message: 'Task with the specified ID does not exist!'})
    }
  } catch (err) {
    res.status(500).send(`${err.message} ${err.stack}`);
  }
})

module.exports = router;