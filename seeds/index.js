// index.js is the starting point to seed the demo data.  run npm run seed from console.

const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedComments = require('./commentData');
const seedPosts = require('./postData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedPosts();

  await seedComments();

  process.exit(0);
};

seedAll();
