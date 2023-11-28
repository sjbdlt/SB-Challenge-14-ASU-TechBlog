const { Blog } = require('../models');

const Blogdata = [
  {
    title: 'Why use Node.js',
    subject: 'node js',
    note: 'Node js is a great tool to create a blog, that why',
    created_date: 'November 20, 2023 08:00:00',
    user_id: '1',
  },
  {
    title: 'Why use mysql',
    subject: 'sql',
    note: 'allows you to save your data in an organized structure',
    created_date: 'November 22, 2023 07:00:00',
    user_id: '1',
  },  
];

const seedBlog = () => Blog.bulkCreate(Blogdata);

module.exports = seedBlog;
