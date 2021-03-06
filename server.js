const express = require('express');
const mongoose = require('mongoose');
const app = express();
// const routes = require("./Server/routes/index")
const morgan = require('morgan');
const routes = require('./Server/routes');
const userRoute = require('./Server/routes/userRoute');
const addWoodRoute = require('./Server/routes/userWoodR');
const PORT = process.env.PORT || 5000;
require('dotenv').config();
// const db = require('./Server/config/db')
var cors = require('cors');
const cookieParser = require('cookie-parser');

require('./Server/models/dbM');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/GotWood', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
mongoose.connection.on('connected', () => {
    console.log('successfuly connected to db');

})


// app.get('/test', (req, res) => {
//     res.send("that works")
// })

// configured routes

app.use(cors()); // Use this after the variable declaration
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));
// app.use(routes);
app.use(cookieParser());
app.use(routes);
app.use('/save', routes);
app.use('/auth', userRoute);
app.use('/addWood', addWoodRoute);
app.listen(PORT, () => {
    console.log('app running on PORT: ' + PORT)
});