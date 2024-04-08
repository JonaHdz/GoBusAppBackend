const Workout = require("../database/Workout");
const{v4 : uuid} = require("uuid")

const getAllWorkouts = async () => {
    const allWorkouts = await Workout.getAllWorkouts();
    return allWorkouts;
}
const getWorkoutById = async () => {
    return;
}
const createWorkout = async (newWorkout) => {
    const workoutToInsert ={
        // inserta una copia de lo que se recibe en el body
        ...newWorkout,
        id: uuid(),
        createdAt : new Date().toLocaleString("en-US",{timeZone: "UTC"}),
        updatedAt : new Date().toLocaleString("en-US",{timeZone: "UTC"}),

    };
    console.log("debugging ",workoutToInsert);
    const createdWorkout = await Workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
}
const updateWorkout = async () => {
    return;
}
const deleteWorkout = async () => {
    return;
}
module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout
}