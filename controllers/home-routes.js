const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const auth = require('../utils/auth');
// TODO: Import the custom middleware



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


router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{model: User, attributes: {exclude: ['password']}}, {model: Comment, include:[{model: User, attributes:{exclude: ['password']} } ]}]  
    });

    if (!postData) {
      res.status(404).json({ message: 'No post with this id!' });
      return;
    }

    const post = postData.toJSON();

    res.render('post', {
      post,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }

});

// // GET one gallery
// // TODO: Replace the logic below with the custom middleware
// router.get('/gallery/:id', async (req, res) => {
//   // If the user is not logged in, redirect the user to the login page
//   // if (!req.session.loggedIn) {
//   //   res.redirect('/login');
//   // } else {
//   //   // If the user is logged in, allow them to view the gallery
//   router.use(auth);
//     try {
//       const dbGalleryData = await Gallery.findByPk(req.params.id, {
//         include: [
//           {
//             model: Painting,
//             attributes: [
//               'id',
//               'title',
//               'artist',
//               'exhibition_date',
//               'filename',
//               'description',
//             ],
//           },
//         ],
//       });
//       const gallery = dbGalleryData.get({ plain: true });
//       res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   // }
// });

// // GET one painting
// // TODO: Replace the logic below with the custom middleware
// router.get('/painting/:id', async (req, res) => {
//   // If the user is not logged in, redirect the user to the login page
//   // if (!req.session.loggedIn) {
//   //   res.redirect('/login');
//   // } else {
//   //   // If the user is logged in, allow them to view the painting
//   router.use(auth);
//     try {
//       const dbPaintingData = await Painting.findByPk(req.params.id);

//       const painting = dbPaintingData.get({ plain: true });

//       res.render('painting', { painting, loggedIn: req.session.loggedIn });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   // }
// });

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
