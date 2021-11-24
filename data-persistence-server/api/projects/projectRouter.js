const projects = require('./projectModel.js');

const router = require('express').Router();


/** 
 * @swagger
 * 
 * components: 
 *   schemas:
  *    projects:
    *     type: object
      *     required:
      *       - project-name
      *     properties:
      *       project-id: 
      *        type: integer
      *        description: Auto-incrementing ID for each project
      *       project-name:
      *         type: string
      *         description: Name of the project 
      *       project-description: 
      *         type: string
      *         description: Description of the project
      *       project-completed:
      *          type: boolean
      *          description: Whether the project is completed or not
      *     example:
      *      project-id: 1
      *      project-name: "Bar"
      *      project-description: "Bar is a great place to work"
      *      project-completed: false
      *      
*/

/**
 * @swagger
 * tags: 
 *   name: Projects
 *   description: API for managing projects
 * 
 */

/**
 * @swagger
 * /api/projects:
 *    get:
 *      summary: Returns a list of all projects
 *      tags: [Projects]
 *      responses:
 *        200:
 *         description: An array of projects  (see example below)
 *         content:
 *           application/json:
 *            schema:
 *              type: array 
 *              items:
 *                $ref: '#/components/schemas/projects'
 *                
 *              
 *        
 */

router.get('/', async (req, res, next) => {
  try {
    const list = await projects.find();
    let modifiedProjects = [];
    if(list) {
      modifiedProjects = list.map(project => {
        return {...project, 'project-completed': (project['project-completed']) ? true : false};
      });
      res.status(200).json(modifiedProjects);
    } else {
      res.status(404).json({message: 'No Projects found!'})
    }
  } catch (err) {
    res.status(500).send(`${err.message} ${err.stack}`);
  }
})


/**
 * @swagger
 * /api/projects/{id}:
 *   get:
 *    summary: Get the project by specified project-id
 *    tags: [Projects]
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: id of the project
 *    responses: 
 *        200:
 *         description: Listing of project with the specified project-id
 *         content:
 *           application/json:
 *              schema: 
 *                $ref: '#/components/schemas/projects'  
 *        404:
 *          description: Project with the specified ID does not exist! 
 * 
 */


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
})

module.exports = router;

