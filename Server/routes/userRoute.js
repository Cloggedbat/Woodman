const express = require('express')
const router = express.Router();
const User = require("../models/woodData")

// router.get('/userApi', (req, res) => {
//     woodD.find({})
//         .then((data) => {
//             console.log('data', data);
//             res.json(data)
//         })
//         .catch((error) => {
//             console.log('error', daerrorta)
//         })


// });
router.post('/userApi', (req, res) => {
    console.log('body', req.body)
    const data = req.body;
    const newWoodData = new woodD(data);
    newWoodData.save((error) => {
        if (error) {
            res.status(500).json({ msg: "error" })
        } else {
            res.json({
                msg: 'got the data'
            })
            console.log("no error")

        }
    })
});

module.exports = router;