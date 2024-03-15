import React from 'react';
import './Chips.css';
import { Link } from 'react-router-dom';
import ChipsImg from './Chips.jpg';

function Chips() {
     return (
          <div className="Chips"
               style={{ backgroundImage: `url(${ChipsImg})` }}>
               <h1>CHIPS</h1>
               <div className="links">
                    <Link to="/">Go Back to Vending Machine</Link>
                    <Link to="/cookies">Cookies</Link>
                    <Link to="/sodas">Sodas</Link>
               </div>
          </div>
     );
}

export default Chips;