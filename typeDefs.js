const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }
  type User{
    uuid: String
    firstName: String
    lastName: String
    email: String
    username: String
    interests: [String]
    education: Education
    department: String
    agenda: [Agenda]
    mentors: [Mentor]
    mentees: [Mentee]
  }

  type Education{
    school: String
    gradDate: String
    major: String
    degreeType: String
  }

  type Agenda{
    mentorUsername: String
    title: String
    meetingStart: String
    meetingEnd: String
  }

  type Mentor{
    mentorUsername: String
    meetings: [Meeting]
  }

  type Mentee{
    menteeUsername: String
    meetings: [Meeting]
  }

  type Meeting{
    date: String
    startTime: String
    endTime: String
  }

  type Query {
    books: [Book]
    users: [User]
  }
`;


module.exports = typeDefs;