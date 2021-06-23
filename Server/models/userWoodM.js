const mongoose = require("mongoose");
const { kStringMaxLength } = require("buffer");
require('../config/db')
require('../models/dbM')
var Schema = mongoose.Schema;


var userWoodSchema = new Schema({
    name: { type: String, required: false },
    lat: { type: Number, required: false },
    lng: { type: Number, required: false },

    date: {
        type: String,
        default: Date.now(),
        required: true
    }

});

var userWoodD = mongoose.model('userWoodData', userWoodSchema)

module.exports = userWoodD;