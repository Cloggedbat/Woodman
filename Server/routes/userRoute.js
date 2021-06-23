const express = require('express')
const router = express.Router();
const User = require("../models/UserModel")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
router.post('/', async (req, res) => {
    try {
        const { username, password, passwordVerify } = req.body;
        // validations
        if (!username || !password || !passwordVerify)

            // clean this up when we come to style*******************************************************

            return res
                .status(400)
                .json({ errorMessage: "******Please enter all Req fields******" });

        if (password.length < 6)
            return res
                .status(400)
                .json({ errorMessage: "******Please enter all more then 6 characters******" });

        if (password !== passwordVerify)
            return res
                .status(400)
                .json({ errorMessage: "******Please enter all more then 6 characters******" });


        const existingUser = await User.findOne({ username })
        if (existingUser)
            return res
                .status(400)
                .json({ errorMessage: "******account exists******" });
        // PW hash
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt)
        console.log(passwordHash)

        const newUser = new User({
            username, passwordHash
        });
        const savedUser = await newUser.save()
        console.log(savedUser)

        // login

        const token = jwt.sign({
            user: savedUser._id
        }, process.env.JWT_SECRET
        );
        console.log(token, "token")


    } catch (err) {
        console.error(err)
        res.status(500).send();
    }

    // console.log(email);
});
module.exports = router;