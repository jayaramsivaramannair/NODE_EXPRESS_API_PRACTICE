require('dotenv').config();

const server = require('./index.js');



//We'll read the port from the server environment if it is there
//Heroku will have the PORT environment variable set
const port = process.env.PORT || 5000;



server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
})