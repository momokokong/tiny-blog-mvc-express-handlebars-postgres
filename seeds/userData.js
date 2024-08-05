const { User } = require('../models');

const userData = [
  {
    username: "alice",
    password: "alicealice" 
  },
  {
    username: "bob",
    password: "bobbob" 
  }
];

const seedUsers = () => User.bulkCreate(userData, {
  individualHooks: true,
});

module.exports = seedUsers;
