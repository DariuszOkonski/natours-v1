const dotenv = require('dotenv');
dotenv.config({
  path: './config.env',
});

const app = require('./app');

// console.log(process.env);
// const { NODE_ENV, PORT, USER, PASSWORD } = process.env;
// console.log(NODE_ENV, PORT, USER, PASSWORD);

// start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
