const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const auth = require('../utils/auth');

// /sessiondate for testing purposes
router.get("/sessiondata", auth, (req, res) => {
  res.json(req.session);
});

// GET all blog posts for homepage
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const posts = postData.map((post) => post.toJSON());
    console.log(posts);
    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// /login shows the login page.  if logged in already, redirect to /.
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// /logout destroy the login session and redirect back to /.
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
