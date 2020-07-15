const users = require("../data/users");

const usersResolver = () => {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve(users)
        }, 500)
      });
}

module.exports = usersResolver