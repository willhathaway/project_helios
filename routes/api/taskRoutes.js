const router = require("express").Router();
const taskController = require("../../controllers/taskController");

// matches with "/api/tasks":
router.route("/")
    .post(taskController.create)
    .delete(taskController.remove);

// matches with "/api/tasks/:params":
router
    .route("/:email")
    .get(taskController.findAll);


// matches with "/api/tasks/deleteAll":

router.route("/deleteAll")
    .delete(taskController.removeAll)

    
module.exports = router;