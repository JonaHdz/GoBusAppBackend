const express = require("express");
const router = express.Router();
const WorkoutConstroller  = require("../../controllers/workoutController");

router.get("/", WorkoutConstroller.getAllWorkouts);

router.get("/a", (req, res) => {
    res.send("Hello World");

}); 

router.get("/:workoutId", WorkoutConstroller.getWorkoutById);

router.post("/", WorkoutConstroller.createWorkout);

router.patch("/:workoutId", WorkoutConstroller.updateWorkout);

router.delete("/:workoutId", WorkoutConstroller.deleteWorkout);

module.exports = router;
