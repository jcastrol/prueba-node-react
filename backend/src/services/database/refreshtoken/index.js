const prisma = require('../../../config/prisma/prisma');
const createRefreshToken = async (userId, hashedToken) => {
    return await prisma.refreshToken.create({
        data: {
            userId,
            hashedToken
        }
    });
};

const findRefreshToken = async (token) => {
    return await prisma.refreshToken.findUnique({ where: { hashedToken: token } });
};

const revokeRefreshToken = async (token) => {
    return await prisma.refreshToken.updateMany({
        where: { hashedToken: token },
        data: { revoked: true }
    });
};
module.exports = {
    createRefreshToken,
    findRefreshToken,
    revokeRefreshToken,

};