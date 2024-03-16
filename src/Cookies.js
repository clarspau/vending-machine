import React from 'react';
import './Cookies.css';
import { Link } from 'react-router-dom';
import CookiesImg from './Cookies.jpg';

function Cookies() {
     return (
          <div className="Cookies"
               style={{ backgroundImage: `url(${CookiesImg})` }}>
               <div className="Cookies-contents">
                    <h1>COOKIES</h1>
                    <div>
                         <Link to="/" className='vm-link'>Go Back to Vending Machine</Link>
                    </div>
                    <div className="links">
                         <Link to="/chips" className='link'>Chips</Link>
                         <Link to="/sodas" className='link'>Sodas</Link>
                    </div>
               </div>
          </div>
     );
}

export default Cookies;