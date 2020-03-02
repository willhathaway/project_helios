const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const passport = require("passport");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

router.post('/login',
  passport.authenticate('local', {successRedirect: '/home', failureRedirect: '/login', failureFlash: true }),
  function(req, res) {
    console.log("POST TO LOGIN");
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });


module.exports = router;