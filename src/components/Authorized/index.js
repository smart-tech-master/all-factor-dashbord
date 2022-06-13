import React from 'react';
import { Redirect } from 'react-router-dom';
import TokenStorage from 'utils/TokenStorage';

const Authorized = ({ children }) => {
  if (!TokenStorage.isAuthenticated()) {
    return <Redirect to="/auth/login" />;
  }

  return children;
};

export default Authorized;
