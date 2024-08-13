const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// /post to add a post associated with the user id
router.get('/', async (req, res) => {
  try {
    res.render('addPost', {
      uid: req.session.uid,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// /post/:id to view a specific post where id is the post_id
router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{model: User, attributes: {exclude: ['password']}}, {model: Comment, include:[{model: User, attributes:{exclude: ['password']} } ]}]  
    });

    if (!postData) {
      res.status(404).json({ message: 'No post with this id!' });
      return;
    }

    const post = postData.toJSON();
    console.log(post);

    const author = (post.user_id == req.session.uid) ? true : false;

    res.render('post', {
      post,
      loggedIn: req.session.loggedIn,
      author:author
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// /post/edit/:id to edit a post where the id is the post_id
router.get('/edit/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (!postData) {
      res.status(404).json({ message: 'No post with this id!' });
      return;
    }

    const post = postData.toJSON();
    console.log(post);

    if (post.user_id != req.session.uid) {
      res.status(404).json({ message: 'are you hacky?' });
      return;
    }

    res.render('post', {
      post,
      loggedIn: req.session.loggedIn,
      edit: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;