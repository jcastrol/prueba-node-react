const prisma = require('../../../config/prisma/prisma');

const findUserByEmail = async (email) => {
    return await prisma.user.findUnique({ where: { email } });
};

const findUserById = async (id) => {
    return await prisma.user.findUnique({
        where: { id: id },
    });
};

const createUser = async (data) => {
    return await prisma.user.create({ data });
};

module.exports = {
    findUserByEmail,
    findUserById,
    createUser,
};