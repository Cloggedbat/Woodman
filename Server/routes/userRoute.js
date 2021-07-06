const express = require('express')
const router = express.Router();
const User = require("../models/UserModel")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
require('dotenv').config()


// registering new accounts
router.post('/', async (req, res) => {
    try {
        const { username, password, passwordVerify } = req.body;
        // validations
        if (!username || !password || !passwordVerify)

            // clean this up when we come to style*******************************************************

            return res
                .status(400)
                .json({ errorMessage: "Please enter all required fields." });

        if (password.length < 6)
            return res.status(400).json({

                errorMessage: "Please enter a password of at least 6 characters.",


            });

        if (password !== passwordVerify)
            return res.status(400).json({
                errorMessage: "Please enter the same password twice.",
            });

        const existingUser = await User.findOne({ username });
        if (existingUser)
            return res.status(400).json({
                errorMessage: "An account with this email already exists.",
            });



        // hash the password

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        // save a new user account to the db

        const newUser = new User({
            username: username,
            passwordHash: passwordHash

        });

        const savedUser = await newUser.save();

        // sign the token

        const token = jwt.sign(
            {
                user: savedUser._id,
            },
            process.env.JWT_SECRET
        );
        console.log(token, 'ewe')

        // send the token in a HTTP-only cookie

        res
            .cookie("token", token, {
                httpOnly: true,
                secure: true,
                sameSite: "none",
            })
            .send();
    } catch (err) {
        console.error(err, 'wtf');
        res.status(500).send();
    }
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
        console.error(err, 'what the fuck')
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