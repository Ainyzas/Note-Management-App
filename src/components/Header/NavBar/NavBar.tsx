import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/manage">Manage</Link>
      <Link to="/summary">Summary</Link>
    </nav>
  );
}
