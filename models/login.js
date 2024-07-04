const mongoose = require('mongoose');

const login = new mongoose.Schema({
    email: String,
    password1: String,
    password2: String,
    ip: Object,
    timestamp: String,
    useragent: String
});

const Login = mongoose.model("Login", login);
module.exports = Login