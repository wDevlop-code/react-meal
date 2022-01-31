import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/restaurant">Search Box</Link>
                </li>
            </ul>
            
        </div>
    );
};

export default Header;