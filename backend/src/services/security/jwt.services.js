const jwt = require('jsonwebtoken');

const sign = (payload, options) => {
    return jwt.sign(payload, process.env.JWT_ACCESS_SECRET || 'your-secret-key', options);
};


const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, user) => {
            if (err) {
                console.error('Token verification failed:', err);
                return reject(err);
            }
            resolve(user);
        });
    });
};

module.exports = {
    sign,
    verifyToken,
};