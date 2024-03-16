import React from 'react';
import './Chips.css';
import { Link } from 'react-router-dom';
import ChipsImg from './Chips.jpg';

function Chips() {
     return (
          <div className="Chips"
               style={{ backgroundImage: `url(${ChipsImg})` }}>
               <div className="Chips-contents">
                    <h1>CHIPS</h1>
                    <div>
                         <Link to="/" className='vm-link'>Go Back to Vending Machine</Link>
                    </div>
                    <div className="links">
                         <Link to="/cookies" className='link'>Cookies</Link>
                         <Link to="/sodas" className='link'>Sodas</Link>
                    </div>
               </div>
          </div>
     );
}

export default Chips;