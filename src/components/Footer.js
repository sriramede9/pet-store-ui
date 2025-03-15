import React from 'react';
import PropTypes from 'prop-types';

function Footer({ year = new Date().getFullYear(), message = 'Thank you for visiting our store!' }) {
    console.log("Year:", year, "Message:", message);
    return (
        <footer>
            <p>{message} &copy; {year} Pet Store. All rights reserved.</p>
        </footer>
    );
}

// Define prop types
Footer.propTypes = {
    year: PropTypes.number,
    message: PropTypes.string,
};

export default Footer;
