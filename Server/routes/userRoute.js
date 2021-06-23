const express = require('express')
const router = express.Router();
const User = require("../models/UserModel")


router.post('/', (req, res) => {
    try {
        const { email, password, passwordVerify } = req.body;
        // validations
        if (!email || !password || !passwordVerify)

            // clean this up when we come to style*******************************************************

            return res.status(400)
                .json({ errorMessage: "******Please enter all Req fields******" })

        if (password.length < 6)
            return res.status(400)
                .json({ errorMessage: "******Please enter all more then 6 characters******" })

    } catch (err) {
        console.error(err)
        res.status(500).send();
    }

    console.log(email);
});
module.exports = router;