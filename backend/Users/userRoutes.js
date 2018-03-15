const express = require('express');
const bcrypt = require('bcrypt');

const userRouter = express.Router();
const User = require('./userModel');
const userController = require('./userControllers');

userRouter.get('/', (req, res) => {
  res.send('users working');
});

userRouter.post('/', (req, res) => {
  const { username, password } = req.body;
  userController.addUser(username, password, res);
});

userRouter.post('/login', (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }, (err, user) => {
    if (err) {
      res.status(500).json(err);
    }
    user.checkPassword(password, (err, isMatch) => {
      if (err) {
        res.status(500).json(err);
      }
      if (isMatch) {
        res.status(200).json({ isLoggedIn: true });
      } else {
        res.status(401).json({ isLoggedIn: false });
      }
    });
  }).catch(err => {
    res.status(500).json(err);
  });
});

module.exports = userRouter;
