# Building RESTful APIs with Node and Express

This repository contains three test servers created to demonstrate the basic steps to be taken to build a RESTful API with Node and Express.

- [Server 1](./hobbits-server)
- [Server 2](./just-another-server)
- [Server 3](./data-persistence-server)

Both Server 1 and Server 2 listed above show how to perform basic CRUD operations on a database.
However, none of the above two servers persist the data as there is no database set up.
Thus, any changes made during these CRUD operations are lost when the server is restarted.

Server 3 listed above is the only application listed above which is capable of persisting the data.
The database for this server was set up using SQLite as a lightweight database and KnexJS (Object Relational Mapper) to connect and make SQL commands to the database.

## Project Set Up Instructions:

- Clone the repository to your local machine
- cd into the directory for any of the servers listed above
- Run npm install to install the required dependencies

## Documentation

- The available api endpoints have been only documented for Server 3 above.
- The documentation for Server 3 has been created using [Swagger](https://swagger.io/).
- The documentation can be launched and viewed inside the browser by navigating to the following url: http://localhost:4000
- Note: The port number listed above can change based on whichever port the server launches on.
