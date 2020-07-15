const usersResolver = require("./resolvers/usersResolver");
const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];



const resolvers = {
    Query: {
      books: () => books,
      users: usersResolver
    },

};


module.exports = resolvers;