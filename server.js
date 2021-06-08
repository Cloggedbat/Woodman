const express = require('express')
const mongoose = require('mongoose');
const app = express();
// const routes = require("./Server/routes/index")
const morgan = require('morgan');
const routes = require('./Server/routes')
const PORT = process.env.PORT || 5000;
// const db = require('./Server/config/db')
require('./Server/models/dbM')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/GotWood', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
mongoose.connection.on('connected', () => {
    console.log('successfuly connected to db');

})






app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('tiny'))
// app.use(routes)
app.use('/api', routes)
// app.use('/', db)


app.listen(PORT, () => {
    console.log('app running on PORT: ' + PORT)
})