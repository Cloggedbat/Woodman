const mongoose = require("mongoose");
const { kStringMaxLength } = require("buffer");
require('../config/db')
require('../models/dbM')
var Schema = mongoose.Schema;


var WoodSchema = new Schema({
    name: { type: String, required: false },
    lat: { type: String, required: false },
    long: { type: String, required: false },

    date: {
        type: String,
        default: Date.now(),
        required: false
    }

});

var woodD = mongoose.model('woodData', WoodSchema)

module.exports = woodD;