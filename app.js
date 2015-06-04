/**
 * Created by Robby on 6/3/2015.
 * Description: Main app file
 */

// Load required packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var liftController = require('./controllers/lift');

// MongoDB location
var mongodb = 'mongodb://localhost:27017/beerlocker'

// Connect to mongodb
mongoose.connect(mongodb);

// Create Express app
var app = express();

// Use body-parser
app.use(bodyParser.urlencoded({
    extended: true
}));

// Create express router
var router = express.Router();

// Create endpoint handlers for /lifts
router.route('/lifts')
    .post(liftController.postLifts)
    .get(liftController.getLifts);

// Create endpoint handlers for /lifts/:lift_id
router.route('/lifts/:lift_id')
    .get(liftController.getLift)
    .put(liftController.putLift)
    .delete(liftController.deleteLift);

// Register all routes with /api
app.use('/api', router);

// Start server
app.listen(3000);