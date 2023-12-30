const express = require('express');

const getAllUsers = (req, res) => {
  return res.status(500).json({
    status: 'error',
    message: 'This route "getAllUsers" is not yet defined',
  });
};

const createUser = (req, res) => {
  return res.status(500).json({
    status: 'error',
    message: 'This route "createUser" is not yet defined',
  });
};

const getUser = (req, res) => {
  return res.status(500).json({
    status: 'error',
    message: 'This route "getUser" is not yet defined',
  });
};

const updateUser = (req, res) => {
  return res.status(500).json({
    status: 'error',
    message: 'This route "updateUser" is not yet defined',
  });
};

const deleteUser = (req, res) => {
  return res.status(500).json({
    status: 'error',
    message: 'This route "deleteUser" is not yet defined',
  });
};

const router = express.Router();

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
