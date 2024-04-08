const workOutService = require("../services/workoutService");

const getAllWorkouts = async (req, res) => {
    const getAllWorkouts = await workOutService.getAllWorkouts();
    console.log("dentro de controller");
    res.send({ status: 200, data: getAllWorkouts, message: "All workouts retrieved successfully" });
}

const getWorkoutById = async (req, res) => {
    const getWorkoutById = await workOutService.getWorkoutById();
    return res.send(`Get workout ${req.params.workoutId}`);
}

const createWorkout = async (req, res) => {
    console.log("dentro de controller de creacion de workout");
    const { body } = req;
    if (!body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips) {
            return res.
            status(400).
            send({
                data: body,
                message: "pedillos de llenado incompleto"
            });
    }

    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
    }
    const createWorkout = await workOutService.createWorkout(newWorkout);
    console.log(createWorkout);
    res.
        status(201).
        send({
            data: createWorkout,
            message: "Workout created successfully"
        });
}

const updateWorkout = async (req, res) => {
    const updateWorkout = await workOutService.updateWorkout();
    res.send(`Update workout ${req.params.workoutId}`);
}

const deleteWorkout = async (req, res) => {
    const deleteWorkout = await workOutService.deleteWorkout();
    res.send(`Delete workout ${req.params.workoutId}`);
}

module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout
}