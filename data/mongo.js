const mongoose = require('mongoose')
const mongoURI = '<Mongo_URI>'
const Schema = mongoose.Schema;
async function mongo() {
  await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  console.log("Successfully connected to Mongo database!");

  return mongoose;
}


module.exports = mongo;
