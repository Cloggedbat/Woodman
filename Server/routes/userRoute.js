const express = require('express')
const router = express.Router();
const User = require("../models/UserModel")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const auth = require("../middleware/auth");

require('dotenv').config()


// registering new accounts
router.post('/', async (req, res) => {
    try {
        const { username, password, passwordVerify, firstName, lastName } = req.body;
        // validations
        if (!username || !password || !firstName || !lastName)

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

        // login with token

        const token = jwt.sign({
            user: savedUser._id,
        }, process.env.JWT_SECRET
        );
        // console.log(token, "token")
        // send token as cookie
        res.cookie('token', token, {
            httpOnly: true,
        })
            .send();


    } catch (err) {
        console.error(err)
        res.status(500).send();
    }
    // console.log(email);
});
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password)
            // clean this up when we come to style*******************************************************
            return res
                .status(400)
                .json({ errorMessage: "******Please enter all Req fields******" });

        const existingUser = await User.findOne({ username })
        if (!existingUser)
            return res
                .status(401)
                .json({ errorMessage: "*****Wrong username or password*****" });
        const passwordCorrect = await bcrypt.compare(password, existingUser.passwordHash)
        if (!passwordCorrect)
            return res
                .status(401)
                .json({ errorMessage: "*****Wrong username or password*****" });



        const token = jwt.sign({
            user: existingUser._id,
        }, process.env.JWT_SECRET
        );

        // send token as cookie
        res.cookie('token', token, {
            httpOnly: true,
        })
            .send();


    } catch (err) {
        console.error(err)
        res.status(500).send();
    }

});
router.get("/logout", (req, res) => {
    res.cookie('token', '', {
        httpOnly: true,
        expires: new Date(0)

    })
        .send();

});




module.exports = router;