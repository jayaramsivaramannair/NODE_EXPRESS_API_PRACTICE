const resources = require('./resourceModel.js');

const router = require('express').Router();

/** 
 * @swagger
 * 
 * components: 
 *   schemas:
  *    resources:
    *     type: object
      *     required:
      *       - resource-name
      *     properties:
      *       resource-id: 
      *        type: integer
      *        description: Auto-incrementing ID for each resource
      *       resource-name:
      *         type: string
      *         description: Name of the resource 
      *       resource-description: 
      *         type: string
      *         description: Description of the resource
      *     example:
      *      resource-id: 1
      *      resource-name: "One Ring"
      *      project-description: "One Ring to Rule Them All"
      *      
*/


/**
 * @swagger
 * tags: 
 *   name: Resources
 *   description: API for managing resources
 * 
 */

/**
 * @swagger
 * /api/resources:
 *    get:
 *      summary: Returns a list of all resources
 *      tags: [Resources]
 *      responses:
 *        200:
 *         description: An array of resources  (see example below)
 *         content:
 *           application/json:
 *            schema:
 *              type: array 
 *              items:
 *                $ref: '#/components/schemas/resources'
 *                
 *              
 *        
 */


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

})

/**
 * @swagger
 * /api/resources/{id}:
 *   get:
 *    summary: Get the resource by specified resource-id
 *    tags: [Resources]
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: id of the resource
 *    responses: 
 *        200:
 *         description: Listing of resource with the specified resource-id
 *         content:
 *           application/json:
 *              schema: 
 *                $ref: '#/components/schemas/resources'  
 *        404:
 *          description: Resource with the specified ID does not exist! 
 * 
 */



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
})

module.exports = router;