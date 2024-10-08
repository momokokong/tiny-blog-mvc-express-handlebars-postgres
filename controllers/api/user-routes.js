const router = require('express').Router();
const { User } = require('../../models');

// /api/users CREATE a new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = (await User.create({
      username: req.body.username,
      password: req.body.password,
    })).toJSON();
    // console.log(dbUserData.toJSON().id);
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.uid = dbUserData.id;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// /api/users/login to generate the user session
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.uid = dbUserData.toJSON().id;
      res.status(200).json({ message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// /api/users/logout to remove a user session
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
