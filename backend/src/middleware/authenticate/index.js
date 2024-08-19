const {verifyToken} = require('../../services/security/jwt.services')

const authenticateToken =async (req, res, next) => {
   
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) return res.sendStatus(401);

    try {
        const user = await verifyToken(token);
        req.user = user;
        next();
    } catch (err) {
        return res.sendStatus(403); 
    }
};

const authorizeRoles = (...roles) => (req, res, next) => {
    
    if (!roles.includes(req.user.role)) return res.sendStatus(403);
    next();
};

module.exports = { authenticateToken, authorizeRoles };