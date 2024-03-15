import React from 'react';
import './Sodas.css';
import { Link } from 'react-router-dom';
import SodasImg from './Sodas.jpg';

function Sodas() {
     return (
          <div className="Sodas"
               style={{ backgroundImage: `url(${SodasImg})` }}>
               <h1>SODAS</h1>
               <div className="links">
                    <Link to="/">Go Back to Vending Machine</Link>
                    <Link to="/cookies">Cookies</Link>
                    <Link to="/chips">Chips</Link>
               </div>
          </div>
     );
}

export default Sodas;