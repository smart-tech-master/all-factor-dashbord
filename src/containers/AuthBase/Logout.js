import React from 'react';
import { Redirect } from 'react-router-dom';

import TokenStorage from 'utils/TokenStorage';

const Logout = () => {
  TokenStorage.clearToken();
  return <Redirect to="/auth/login" />;
};

export default Logout;
