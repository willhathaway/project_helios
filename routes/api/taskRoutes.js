const router = require("express").Router();
const taskController = require("../../controllers/taskController");

// Matches with "/api/tasks"
router.route("/")
    .post(taskController.create)
    .delete(taskController.remove);

router
    .route("/:email")
    .get(taskController.findAll);


// Matches with "/api/tasks/:params"

router.route("/deleteAll")
    .delete(taskController.removeAll)



// /:email

module.exports = router;