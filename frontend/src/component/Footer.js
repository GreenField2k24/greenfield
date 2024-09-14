import React from 'react';
import './Card.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>© 2024 GreenField. All rights reserved.</p>
                <ul className="footer-links">
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms of Service</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;