import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem',
      backgroundColor: '#007BFF',
      color: '#fff',
      fontSize: '1.2rem',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    }}>
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          color: '#fff',
          margin: '0 1.5rem',
          fontWeight: 'bold',
        }}
      >
        Home
      </Link>
      <Link
        to="/expenses"
        style={{
          textDecoration: 'none',
          color: '#fff',
          margin: '0 1.5rem',
          fontWeight: 'bold',
        }}
      >
        Expenses
      </Link>
    </nav>
  );
};

export default Header;
