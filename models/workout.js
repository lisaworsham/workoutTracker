const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    excercises: [{
        type: {
            type: String,
            trim: true,
            required: "Workout type is required"
        },
        name: {
            type: String,
            trim: true,
            required: "Silly you! Don't you need to remember what you did?"
        },
        duration: {
            type: Number,
            required: "Come on! How long did you actually do this?"
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
});

const Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout