const router = require("express").Router();
const Workout = require("../models/workout");


//get route for /api/workouts
router.get("/api/workouts", function(req, res) {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//get route for /api/workouts/range
router.get("/api/workouts/range", function(req, res) {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//post route for /api/workouts
router.post("/api/workouts", function({ body }, res) {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err)
        });
})

//post route for /api/workouts/range
router.post("/api/workouts/range", function({ body }, res) {
    Workout.insertMany(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err)
        })

})

//put route for /api/workouts/:id
router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
            params.id, { $push: { exercises: body } }, { new: true, runValidators: true }
        )
        .then(data => res.json(data))
        .catch(err => {
            console.log("err", err)
            res.json(err)
        })
});

module.exports = router;