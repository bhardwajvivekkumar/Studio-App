import React from 'react';
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="leftNav">
        <p className="bold">A+</p>
        <p>Studio</p>
      </div>
      <div className="rightNav">
        <p>Home</p>
        <p>what we do</p>
        <p>Service</p>
        <p>Project</p>
        <p>Blog</p>
        <p>Contact</p>
      </div>
    </div>
  )
}

export default Navbar
