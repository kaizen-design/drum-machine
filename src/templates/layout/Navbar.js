import React from 'react';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-dark bg-gradient-dark shadow-sm">
      <div className="container">
        <span className="navbar-brand mb-0 h1">{props.brand}</span>
      </div>
    </nav>
  )
};

export default Navbar;
