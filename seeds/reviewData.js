const { Review } = require('../models');

const Reviewdata = [
  {
    comment: 'agree',   
    comment_date: 'November 22, 2023 08:30:00',
    user_id: '1',
    blog_id: '1',
  },
  {
    comment: 'it is nice',   
    comment_date: 'November 24, 2023 14:30:00',
    user_id: '1',
    blog_id: '1',
  },
  {
    comment: 'mongo is better',   
    comment_date: 'November 23, 2023 09:00:00',
    user_id: '1',
    blog_id: '2',
  },  
];

const seedReview = () => Review.bulkCreate(Reviewdata);

module.exports = seedReview;