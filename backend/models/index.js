require('dotenv').config()
const mongoose = require('mongoose');
const mongodbUri = process.env.MONGODBURI;

async function connectToDb() {
    try {
        await mongoose.connect(mongodbUri);
        console.log('connected to db')
    } catch(err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectToDb;