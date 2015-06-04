/**
 * Created by Robby on 6/3/2015.
 */

var Lift = require('../models/lift');

// Create endpoint for /api/lifts for POSTS
exports.postLifts = function (req, res) {
    var lift = new Lift();

    lift.name = req.body.name;
    lift.reps = req.body.reps;
    lift.weight = req.body.weight;
    lift.setCompleted = req.body.setCompleted;

    lift.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Lift added!', data: lift});
    });
};

// Create endpoint for /api/lifts for GET
exports.getLifts = function(req, res) {
    Lift.find(function(err, lifts) {
        if (err)
            res.send(err);

        res.json(lifts);
    });
};

// Create endpoint for /api/lifts/:lift_id for GET
exports.getLift = function(req, res) {
    Lift.findById(function(err, lift) {
        if (err)
            res.send(err);

        res.json(lift);
    });
};


