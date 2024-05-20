const mongoose = require('mongoose');

const databaseconnect = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/abc")
        console.log('database is connected');
    } catch (error) {
        console.log(`database is not connected  ${error}`)
    }
}

module.exports = databaseconnect()