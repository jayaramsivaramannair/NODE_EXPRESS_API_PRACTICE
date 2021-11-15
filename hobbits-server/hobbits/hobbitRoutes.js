const express = require('express');

const router = express.Router();


//List of Hobbits
const hobbits = [
  {
    id: 1,
    name: 'Samwise Gamgee',
  },
  {
    id: 2,
    name: 'Frodo Baggins',
  },
]

//Id counter
let nextId = 3;
/*
server.get('/hobbits', (req, res) => {
  //A list of hobbits to send to the client when a request is made to the '/hobbits' route
  const hobbits = [
    {
      id: 1,
      name: 'Samwise Gamgee',
    },
    {
      id: 2,
      name: 'Frodo Baggins',
    },
  ]
  res.status(200).json(hobbits);
})
*/

//Using query string which supports sorting of results - ?sortby=name is the query string parameter
router.get('/', (req, res) => {
  // query string parameters get added to req.query
  const sortField = req.query.sortby || 'id'; //This specifies that the response should be sorted by id if no sortby query string parameter is specified

  //sorting function
  const response = hobbits.sort((a, b) => (a[sortField] < b[sortField]) ? -1 : 1);

  res.status(200).json(response);

})

//A POST request to the '/hobbits' route which returns a JSON object containing the url and method used to make the request
router.post('/', (req, res) => {
  const hobbit = req.body
  hobbit.id = nextId++;

  hobbits.push(hobbit);

  res.status(201).json(hobbit);
})

// A PUT request to the '/hobbits' route which returns a JSON object containing the url and method used to make the request
router.put('/:id', (req, res) => {
  const hobbit = hobbits.find(hobbit => hobbit.id === parseInt(req.params.id));

  //Check if the hobbit exists or not
  if(!hobbit) {
    res.status(404).json({message: 'Hobbit does not exist'});
  } else {
    // Modify the existing hobbit
    Object.assign(hobbit, {id: req.params.id, ...req.body,});

    res.status(200).json(hobbit);
  }
})

// A DELETE request to the '/hobbits' route
router.delete('/', (req, res) => {
  res.status(200).json({url: '/hobbits', operation: 'DELETE'});
})



//After the route is configured, it needs to be exported so that it can be used elsewhere. 
module.exports = router;
