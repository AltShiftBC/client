import React from 'react';
import { isAuthenticated } from '../services/authService';
import { Redirect } from 'react-router-dom';

const ProtectedRoute = (Component) => {
  return (props) => {
    if (isAuthenticated()) {
      return <Component {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  };
};

export default ProtectedRoute;
