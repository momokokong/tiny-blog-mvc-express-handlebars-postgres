const router = require('express').Router();
const { Post, User, Comment } = require('../models');

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
    res.render('post', {
      post,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;