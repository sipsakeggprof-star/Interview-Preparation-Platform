const jwt = require('jsonwebtoken');
const UserLog = require('../models/userLog');   

const protect = async (req, res, next) => {

    try{
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ 
                message: 'No token provided, authorization denied' 
            });
        }

        const decoded = jwt.verify(
            token, 
            process.env.JWT_SECRET);

        req.user = await UserLog.findById(decoded.id)

        next()

    } catch (error) {
        res.status(500).json({ 
            message: 'Error occurred while verifying token', error: error.message 
        });
    }
}

module.exports = protect;