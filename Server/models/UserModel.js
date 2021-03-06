// import required modules and packages
const mongoose = require("mongoose");
// const passportLocalMongoose = require("passport-local-mongoose");

// initialize mongoose schema
const Schema = mongoose.Schema;

// create mongoose Schema for user model
// there is no password field because passport-local-mongoose will salt and hash and store those fields in the database
const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        trim: true,
        required: false
    },
    passwordHash: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: false
    },
    address1: {
        type: String,
        trim: true,
        required: false
    },
    city: {
        type: String,
        trim: true,
        required: false
    },
    state: {
        type: String,
        trim: true,
        required: false
    },
    zipCode: {
        type: Number,
        trim: true,
        required: false
    },
    // uuid: {
    //     type: String,
    //     required: true
    // },
    // personId: {
    //     type: String
    // },
    // profilePic: {
    //     data: Buffer,
    //     contentType: String
    // }
});

// use plugin for passport in new user schema
// UserSchema.plugin(passportLocalMongoose);

//initialize user model
const user = mongoose.model("user", userSchema);

// export User out of User.js
module.exports = user;