// src/components/Login.tsx
import React from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaUser, FaKey, FaLock  } from 'react-icons/fa';

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform authentication logic here (e.g., call an API to validate credentials)
    // If authentication is successful, redirect to portal.benby.com/ecconv
    router.push('https://portal.benby.com/ecconv');
  };


  // Apply custom styles to prevent scrolling and increase the size of the form
  const customStyles: Record<string, React.CSSProperties> = {
    formContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '0 20px', // Add horizontal padding
      backgroundImage: "url('https://portal.benby.com/images/img/convert_bg.jpg')",
      backgroundSize: 'cover',
    },
    form: {
      padding: '20px',
      background: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center' as const, // Set textAlign as const
      maxWidth: '400px', // Adjust the max width as needed
      width: '100%', // Make the form container responsive
    },
    logo: {
      width: '150px', // Adjust logo size as needed
      marginBottom: '20px', // Add margin to separate logo from form fields
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      margin: '10px 0',
    },
    inputContainer: {
      marginBottom: '10px',
      position: 'relative',
    },
    icon: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      left: '10px',
      color: '#777',
    },
    input: {
      padding: '10px 40px', // Increase padding to accommodate icons
      width: '100%',
      maxWidth: 'calc(100% - 80px)', // Adjust the max width of input
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px',
    },
  };

  return (
    <div style={customStyles.formContainer}>
      <div style={customStyles.form}>
        <img src="https://portal.benby.com/images/img/BenbyLogo.png" alt="Benby Logo" style={customStyles.logo} />
        <h2 style={customStyles.title}>EComm Finance Automation Converter</h2>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div style={customStyles.inputContainer}>
            <FaUser style={customStyles.icon} />
            <input
              type="text"
              placeholder="6 Digits Employee Number"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={customStyles.input}
            />
          </div>
          <div style={customStyles.inputContainer}>
            <FaLock style={customStyles.icon} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={customStyles.input}
            />
          </div>
          <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '5px', background: 'green', color: '#fff', border: 'none' }}>Login</button>
        </form>
      </div>
    </div>
  );
};


export default Login;
