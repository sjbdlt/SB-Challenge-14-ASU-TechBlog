const { User } = require('../models');

const userdata = [
  {
    name: 'Steven Blake',  
    email: 'sblake@blakeis.com' ,
    member_date: 'November 22, 2023 08:30:00',
    password: 'Blog123',
    blog_id: '1',
  },  
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;