const express = require('express');

const userRouter = express.Router();

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'getAllUsers',
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'createUser',
  });
};

const getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: `getUser: ${req.params.id}`,
  });
};

const updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: `UpdateUser: ${req.params.id}`,
  });
};

const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: `DeleteUser: ${req.params.id}`,
  });
};

userRouter.route('/').get(getAllUsers).post(createUser);
userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = userRouter;
