/**
 * Created by Robby on 6/3/2015.
 */

var mongoose = require('mongoose');

// Define lift schema
var LiftSchema = new mongoose.Schema({
    name: String,
    reps: Number,
    weight: Number,
    setCompleted: Boolean
});

// Export the model
module.exports = mongoose.model('Lift', LiftSchema);

