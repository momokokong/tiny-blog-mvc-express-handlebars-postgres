// redirect the user to /login if the user is not yet logged in.  copied from the class activity.

const withAuth = (req, res, next) => {  
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }
  console.log(req.session.uid + "login")
  next();
};

module.exports = withAuth;
