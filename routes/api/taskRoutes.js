const router = require("express").Router();
const taskController = require("../../controllers/taskController");

// Matches with "/api/tasks"
router.route("/")
    .post(taskController.create);

router
    .route("/:email")
    .get(taskController.findAll)

// Matches with "/api/tasks/:params"
router
    .route("/:time/:email") // /:email
    .delete(taskController.remove);

module.exports = router;