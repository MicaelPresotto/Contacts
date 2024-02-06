## Contact

The Contacts allows you to manage a list of contacts by enabling functionalities such as creation, updating, and deletion. These contacts are stored in a PostgreSQL database, and the API leverages GraphQL for seamless interaction.

This project was initiated as a means to delve deeper into GraphQL. The development process was guided by a comprehensive YouTube tutorial, which can be accessed [here](https://www.youtube.com/watch?v=j0wsF6RD-QE&list=PLK5FPzMuRKlyeZYiJNA54j4lpfxHGlz0j&index=33). The hands-on experience gained through this project has proven valuable, especially considering my regular use of GraphQL in my daily work.

## Tecnologies

* For the frontend, React
* For the API, GraphQL
* For the backend, Nodejs with Knex and postgreSQL

## How to run

To run the Contacts API, ensure you have Node.js installed, and then install the necessary dependencies using the following commands:

```
npm i graphql-tools
npm i knex pg
npm i @apollo/client graphql
```

Also, you`ll need a postgres database to make that connection, to create one via docker use the following command:
```
docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=micael123 -d postgres
```
Now you can run the project :)

## Tips
If you want to manage the database, I highly recommend you to install DBeaver.
