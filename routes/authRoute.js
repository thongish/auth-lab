const express = require("express");
const passport = require("../middleware/passport");
const { forwardAuthenticated } = require("../middleware/checkAuth");

const router = express.Router();

router.get("/login", forwardAuthenticated, (req, res) => res.render("login"));

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/admin", // why does this work??
    // does not feel right - better way to do this?
    failureRedirect: "/auth/login",
  })
);

router.get('/github',
  passport.authenticate('github', { scope: ['user:email'] }));

router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/auth/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log("something going on here")
    res.redirect('/dashboard');
  });

router.get("/logout", (req, res) => {
  //req.session.destroy();
  req.logout();
  res.redirect("/auth/login");
});

module.exports = router;
