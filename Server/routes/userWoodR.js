const express = require('express')
const router = express.Router();
var userWoodD = require("../models/userWoodM")
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken')
require('dotenv').config()


// registering new accounts
router.post('/', async (req, res) => {
    try {
        const { name, lat, lng } = req.body;
        const newUserWoodD = new userWoodD({
            name, lat, lng
        });
        const savedUserWoodD = await newUserWoodD.save();
        res.json(savedUserWoodD);


    } catch (err) {
        console.error(err)
        res.status(500).send();
    }
})
module.exports = router;