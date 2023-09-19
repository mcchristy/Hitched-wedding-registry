const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

// require('dotenv').config();

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3002;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

<<<<<<< HEAD:server.js
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
=======
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);
>>>>>>> 70577ff6b84cac2b25eef5286bde8f81bdac7204:server/server.js

app.get('/', (req, res) => {
    res.send('Wedding Registry');
  });

// Serve up static assets
<<<<<<< HEAD:server.js
const script=("/static/js/main.js")
const express = require('express');
app.use(express.static('public'));

=======
//test 
>>>>>>> 70577ff6b84cac2b25eef5286bde8f81bdac7204:server/server.js

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer();

