// pages/auth/sign-in/page.tsx
import React from 'react';
import {Login, Navbar} from '../../../components';

const LoginPage = () => {
  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <Login />
    </div>
  );
};

export default LoginPage;
