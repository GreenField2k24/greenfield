import React from 'react';
import "./Card.css"


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <h1 className="logo">GreenField</h1>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/about">Categoris</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;