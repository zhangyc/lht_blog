// src/components/common/Footer.js
import React from 'react';

function Footer() {
    return (
        <footer className="text-center mt-5 mb-3">
            <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
        </footer>
    );
}

export default Footer;