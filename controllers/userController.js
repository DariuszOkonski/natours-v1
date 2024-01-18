exports.getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'getAllUsers',
  });
};

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'createUser',
  });
};

exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: `getUser: ${req.params.id}`,
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: `UpdateUser: ${req.params.id}`,
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: `DeleteUser: ${req.params.id}`,
  });
};

// module.exports = {
//   getAllUsers,
//   createUser,
//   getUser,
//   updateUser,
//   deleteUser,
// };
