const authUseCase= require('../use_cases/authUseCase')

const register = async (req, res) => {
    const { email, password, role } = req.body;
    try {
        const user = await authUseCase.register(email, password, role);
        res.status(201).json(user);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await authUseCase.login(email, password);
     
        if (!result) return res.status(401).json({ error: 'Invalid credentials' });
        res.json(result);
    } catch (error) {
        console.log(error)
        res.status(401).json({ error: 'Invalid credentials' });
    }
    
};

const refreshAccessToken = async (req, res) => {
    const { refreshToken } = req.body;
    try {
        const newAccessToken = await authUseCase.refreshAccessToken(refreshToken);
        res.json({ accessToken: newAccessToken });
    } catch (error) {
        console.error('Error refreshing access token:', error);
        res.status(401).json({ error: 'Invalid or expired refresh token' });
    }
};

const logout = async (req, res) => {
    const { refreshToken } = req.body;
    try {
        await authUseCase.logout(refreshToken);
        res.status(204).send(); 
    } catch (error) {
        console.error('Error logging out:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { register, login, refreshAccessToken, logout };