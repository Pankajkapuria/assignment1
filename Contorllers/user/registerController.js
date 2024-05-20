const { init } = require("../../config/producer");
const userModal = require("../../config/userModal");

exports.registerController = async (req, res) => {
    const { name, password } = req.body;
    const user = await userModal.create({ name, password })

    const token = await user.creatToken();

    res.status(201).json({
        message: "register sucessfully",
        token
    })
}

exports.loginController = async (req, res) => {
    const { name, password } = req.body;
    const user = await userModal.findOne({ name })
    if (!user) {
        res.status(401).json({
            message: "user is not defind"
        })
    }
    if (user.password !== password) {
        res.status(401).json({
            message: "password not match"
        })
    }
    const token = await user.creatToken();
    init(req.name);
    res.status(201).json({
        message: "login sucessfully",
        token
    })
}

exports.followController = (req, res) => {
    res.status(201).json({
        message: "follow sucessfully"
    })
}



