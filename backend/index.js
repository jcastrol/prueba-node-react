const express = require('express')
const cors = require('cors');
const authRoutes = require('./src/routes/auth'); 
const solicitudesRoutes =require('./src/routes/solicitudes'); 
const empleadoRoutes =require('./src/routes/empleado'); 
const app = express();

//json
app.use(express.json());

//cors
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'], 
}));


//use routes
app.use('/auth', authRoutes);
app.use('/empleado', empleadoRoutes);
app.use('/solicitud', solicitudesRoutes);

// Manejador de errores
app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});

//start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));