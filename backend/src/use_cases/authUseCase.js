const secureOperations = require('../utils/security/secureOperations');
const UserService = require('../services/database/user');
const RefreshTokenService = require('../services/database/refreshtoken');

const securityService = require('../services/security/jwt.services');
const {generateRandomToken}= require('../utils/security/generateRandomToken')

const register = async (email, password, role) => {
    const hashedPassword = await secureOperations.hashPassword(password, 10);
    const user = await UserService.createUser({
        email,
        password: hashedPassword,
        role
    });

    return user;
};

const login = async (email, password) => {
    const user = await UserService.findUserByEmail(email);

    if (!user) {
        throw new Error('Invalid credentials');
    }
    const ispasswordCorrect=await secureOperations.comparePassword(password, user.password)

    if (!ispasswordCorrect){
        throw new Error('Invalid credentials');
    }
    const token = securityService.sign({ id: user.id, role: user.role }, { expiresIn: '15m' });

    // Create and store refresh token
    const refreshToken =await generateRandomToken();
    await RefreshTokenService.createRefreshToken(user.id, refreshToken);

    return { token, refreshToken };
};

const refreshAccessToken = async (refreshToken) => {
    const tokenRecord = await RefreshTokenService.findRefreshToken(refreshToken);
    if (!tokenRecord || tokenRecord.revoked) {
        throw new Error('Invalid or revoked refresh token');
    }

    const user = await UserService.findUserById( tokenRecord.userId );
    const newAccessToken = securityService.sign({ id: user.id, role: user.role }, { expiresIn: '15m' });

    return newAccessToken;
};

const logout = async (refreshToken) => {
    await RefreshTokenService.revokeRefreshToken(refreshToken);
};

module.exports = {
    register,
    login,
    refreshAccessToken,
    logout
};