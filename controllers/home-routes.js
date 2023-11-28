const router = require('express').Router();
const { Blog, Review, User } = require('../models');

// GET all blog for homepage
router.get('/', async (req, res) => {
  try {
    const dbblogData = await Blog.findAll({ 
      include: [
        {
          model: Review, User, 
        },
      ], 
    });
    const blogs = dbblogData.map((blg) =>
      blg.get({ plain: true })
    );  
    //res.json(blogs);  
      res.render('homepage', {
       blogs,
       logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});





module.exports = router;
