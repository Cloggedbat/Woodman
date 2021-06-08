const mongoose = require("mongoose");
const { kStringMaxLength } = require("buffer");
require('../config/db')
require('../models/dbM')
var Schema = mongoose.Schema;


var WoodSchema = new Schema({
    name: { type: String, required: false },
    body: { type: String, required: false },
    date: {
        type: String,
        default: Date.now()
    }

});

var woodD = mongoose.model('woodData', WoodSchema)

module.exports = woodD;