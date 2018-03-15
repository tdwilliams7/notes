const User = require('./userModel');

const userController = {
  addUser: (username, password, res) => {
    if (!username) {
      res.status(422).json({ error: 'Please enter a username.' });
    } else if (!password) {
      res.status(422).json({ error: 'Please include a password.' });
    } else {
      const newUser = new User({ username, password });
      newUser
        .save()
        .then(user => {
          res.status(200).json(user);
        })
        .catch(err => {
          res.status(500).json({ err: 'Error savign user to database.' });
        });
    }
  }
};

module.exports = userController;
