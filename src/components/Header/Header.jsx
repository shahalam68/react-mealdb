import React from 'react';
import logo from '/logo-small.png'
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
           <div className='logo-img'>
                <img src={logo} alt="" />
           </div>
           <div>
                <nav>
                    <a href="">Home</a>
                    <a href="">Order</a>
                    <a href="">Inventory</a>
                </nav>
           </div>
        </div>
    );
};

export default Header;