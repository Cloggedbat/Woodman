const express = require('express')
const router = express.Router();
const woodD = require('../models/dbM')

router.get('/api', (req, res) => {
    woodD.find({})
        .then((data) => {
            console.log('data', data);
            res.json(data)
        })
        .catch((error) => {
            console.log('error', data)
        })


});
router.post('/save', (req, res) => {
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





// router.get('/name', (req, res) => {
//     const data = {
//         formattedaddress: 'cloggedbat1',
//         lat: 0.4565225,
//         long: 0.5547

//     };
//     res.json(data)

// });


module.exports = router;