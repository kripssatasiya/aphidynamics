import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
        <Link className="navbar-brand" to="/">
            <img src="./newonebgbg.png" alt="img" width="100px" />
            <span className="brand-name">APHIDYNAMICS <br /><h6>Devlopment | Training | Digital Marketing</h6></span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"> <i className="fas fa-bars" style={{color:"pink"}} /></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/services">Services</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/about">About Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/training">Training</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/portfolio">Our Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/contact">Contact Us</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
    </>
  );
}

