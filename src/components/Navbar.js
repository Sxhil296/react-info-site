import React from 'react'
import reactLogo from "../images/physics.png"

const Navbar = () => {
  return (
    <nav>
        <img
        src={reactLogo}
        alt="React logo"
        className="nav-logo"
        />
        <h3 className="nav-logo-text">ReactFacts</h3>
        <h4 className="nav-title">React Course - Project 1</h4>
    </nav>
  )
}

export default Navbar
