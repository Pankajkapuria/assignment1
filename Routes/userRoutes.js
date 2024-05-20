const express = require('express');
const { isAuthenticated } = require('../middlewares/auth.js')
const { registerController, loginController, followController } = require('../Contorllers/user/registerController');

const userRouter = express.Router();

userRouter.route('/register').post(registerController)
userRouter.route('/login').post(loginController)

userRouter.route('/follow').get(isAuthenticated, followController)


module.exports = userRouter