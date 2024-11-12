const express = require("express");
const router = express.Router();
const { ensureAuthenticated, isAdmin } = require("../middleware/checkAuth");

router.get("/", (req, res) => {
  //req.session.destroy();
  res.send("welcome");
});

router.get("/dashboard", ensureAuthenticated, (req, res) => {
  res.render("dashboard", {
    user: req.user,
  });
});

router.get("/admin", isAdmin, (req, res) => {
  console.log(req.sessionStore.sessions)
  res.render("admin", {
    user: req.user,
    session: req.sessionStore.sessions
    //session: Object.entries(req.sessionStore.sessions)
    //session: Object.entries(JSON.parse(JSON.stringify(req.sessionStore.sessions)))
    //session: "something"
  });
});

module.exports = router;
