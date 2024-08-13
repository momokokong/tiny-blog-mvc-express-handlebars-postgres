const router = require('express').Router();

// /comment/:id where id is the post_id and render the add comment page for the post_id
router.get('/:id', async (req, res) => {
  req.session.save(() => {
    req.session.pid = req.params.id;
  });

    res.render("addComment", {
      loggedIn: req.session.loggedIn,
      pid: req.params.id
    });
});

module.exports = router;