const mongoose = require('mongoose');
const WoodSchema = require('../Schema/woodData')
const Schema = mongoose.Schema;

async function db() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/GotWood', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
    console.log('successfuly connected to db');
  } catch (error) {
    console.log('error connecting to db: ');
    console.log(error);
  }
  // const WoodSchema = [
  //   {
  //     name: 'john',
  //     lat: 'jie',
  //     long: 'ja',
  //     date: {
  //       type: String,
  //       default: Date.now()
  //     },
  //   }
  // ];
}
module.exports = db;