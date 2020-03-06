const path = require("path");
const router = require("express").Router();
const taskRoutes = require("./taskRoutes");
const userRoutes = require("./userRoutes");

// Task routes
router.use("/tasks", taskRoutes);
router.use("/users", userRoutes)



module.exports = router;