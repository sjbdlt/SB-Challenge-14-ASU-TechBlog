const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedBlog = require('./blogData');
const seedReview = require('./reviewData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedBlog();
  
  await seedReview();

  process.exit(0);
};

seedAll();
