const { z } = require('zod');

const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    role: z.enum(['USER', 'ADMIN'])
});

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
});

const refreshTokenSchema = z.object({
    refreshToken: z.string()
});

module.exports = {
    registerSchema,
    loginSchema,
    refreshTokenSchema
};