const express = require('express')
const authRoutes = require('./src/routes/auth'); 
const solicitudesRoutes =require('./src/routes/solicitudes'); 
const empleadoRoutes =require('./src/routes/empleado'); 
const app = express();

//json
app.use(express.json());

//cors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

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