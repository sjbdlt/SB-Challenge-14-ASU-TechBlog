const router = require('express').Router();
const { Blog, Review, User } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all blog
router.get('/',  withAuth, async (req, res) => {
  try {
    const dbblogData = await Blog.findAll({ 
      include: [
        {
          model: User
        },
        {
          model: Review
        },
      ], 
    });
    const blogs = dbblogData.map((blg) =>
      blg.get({ plain: true })
    );  
    //res.json(blogs);  
    res.render('blog', {
    blogs,
    logged_in: true 
   });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one blog
router.get('/:id',  withAuth, async (req, res) => {
  try {
    const dbblogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User
        },
        {
          model: Review
        },
      ],
    });
    const blogs = dbblogData.get({ plain: true });
    //res.json(blogs); 
    res.render('blogcomment', { blogs, 
    logged_in: true  });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    console.log(req.body);
    const newBlog = await Blog.create({
      title: req.body.title,
      subject: req.body.subject,
      note: req.body.note,
      created_date: req.body.created_date,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/review/:id', withAuth, async (req, res) => {
  try {
    const dbReviewData = await Review.findByPk(req.params.id);

    const review = dbReviewData.get({ plain: true });
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('blog', { review, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/review', withAuth, async (req, res) => {
  try {
    const newReview = await Review.create({
      comment: req.body.comment,
      comment_date: req.body.comment_date,
      blog_id: req.body.blog_id,
      user_id: req.session.user_id,
    });

    res.status(200).json(newReview);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/bcreate', withAuth, async (req, res) => { 
  res.render('blogcreate');
});

module.exports = router;