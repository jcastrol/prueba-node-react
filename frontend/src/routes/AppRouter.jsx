import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../features/auth/pages/Login';
import Register from '../features/auth/pages/Register';
import { Home } from '../features/common/page/Home';
import PrivateRoute from './PrivateRoute';


const AppRouter = () => {

  return (
  <Routes>
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/" element={<PrivateRoute element={<Home />} />} />
  </Routes>
)};

export default AppRouter;