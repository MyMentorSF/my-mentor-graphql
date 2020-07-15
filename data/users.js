const users = [
    {
      uuid: "12345",
      firstName: "bob",
      lastName: "Doe",
      email: "johndoe@example.com",
      username: "datboi",
      interests: ["music", "art"],
      department: "labs",
      role: "Software Developer",
      agenda: [{
        menteeUsername: "datagirl",
        title: "Discuss opportunities",
        meetingStart: "12:00PM GMT",
        meetingEnd: "12:30PM GMT" },
      ],
      mentees: [
        {menteeUsername: "datagirl"},
      ] 
    },
    {
      uuid: "12345", //String
      firstName: "Jane", //String
      lastName: "Doe", //String
      email: "janedoe@example.com", //String
      username: "datagirl", //String
      interests: [], //Array of Strings
      education: {
        school: "UTD", //String,
        gradDate: "12:00 GMT", //String,
        major: "Computer Science", //String,
        degreeType: "Bachelor's" //String
      },
      department: "Labs", //String
      agenda: [{
        mentorUsername: "datboi", //String
        title: "Discuss opportunities", //String
        meetingStart: "12:00PM GMT", //String
        meetingEnd: "12:30PM GMT"
      }],
      mentors: [
          {mentorUsername: "datboi"}
      ] 
    }
]

module.exports = users;