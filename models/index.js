const User = require('./user');
const Blog = require('./blog');
const Review = require('./review');


Blog.hasMany(Review, {
  foreignKey: 'blog_id',
});

Review.belongsTo(Blog, {
  foreignKey: 'blog_id',
});

User.hasMany(Blog, {
  foreignKey: 'user_id',
});

Blog.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Review, {
  foreignKey: 'user_id'
})

Review.belongsTo(User, {
  foreignKey: 'user_id',
});


module.exports = { User, Blog, Review };
