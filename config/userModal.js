const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');

const userschama = mongoose.Schema({
    name: {
        type: String
    },
    password: {
        type: String
    },
})

userschama.methods.creatToken = async function () {
    return jwt.sign({ name: this.name }, 'secret_key', { expiresIn: '1d' });
}

const userModal = mongoose.model('user', userschama)
module.exports = userModal
