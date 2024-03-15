import React from 'react';
import './Cookies.css';
import { Link } from 'react-router-dom';
import CookiesImg from './cookies.jpg';

function Cookies() {
     return (
          <div className="Cookies"
               style={{ backgroundImage: `url(${CookiesImg})` }}>
               <h1>COOKIES</h1>
               <div className="links">
                    <Link to="/">Go Back to Vending Machine</Link>
                    <Link to="/chips">Chips</Link>
                    <Link to="/sodas">Sodas</Link>
               </div>
          </div>
     );
}

export default Cookies;