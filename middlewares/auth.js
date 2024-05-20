const jwt = require('jsonwebtoken');
exports.isAuthenticated = async (req, res, next) => {
    try {

        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({
                sucess: false,
                message: 'please login first'
            })
        }

        const decode = jwt.verify(token, 'secret_key');
        const payload = decode.name;

        req.name = payload
        next();
    }

    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}