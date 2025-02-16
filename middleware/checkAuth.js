module.exports = {
  ensureAuthenticated: function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/auth/login");
  },
  forwardAuthenticated: function(req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    res.redirect("/dashboard");
  },
  isAdmin: function(req, res, next) {
    const userRole = req.user.role;
    //const userRole = req.session.passport;
    console.log(userRole)
    if (req.isAuthenticated() && userRole == "admin") {
      //if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/auth/login");
  },
};
