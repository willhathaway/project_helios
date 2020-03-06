
const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")
    .post(userController.findOne_or_create)
    .get(userController.findAll);

module.exports = router;