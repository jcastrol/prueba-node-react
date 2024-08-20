import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../features/auth/context/AuthContext';

const PrivateRoute = ({ element}) => {
  const { authState } = useAuth();
  const location = useLocation();
  return authState.token ? (
    element
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;