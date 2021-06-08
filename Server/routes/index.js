const express = require('express')
const router = express.Router();
const woodD = require('../models/dbM')

router.get('/', (req, res) => {
    woodD.find({})
        .then((data) => {
            console.log('data', data);
            res.json(data)
        })
        .catch((error) => {
            console.log('error', daerrorta)
        })


});
router.get('/name', (req, res) => {
    const data = {
        name: 'cloggedbat1',
        body: 29
    };
    res.json(data)

});


module.exports = router;