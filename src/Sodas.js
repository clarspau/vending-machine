import React from 'react';
import './Sodas.css';
import { Link } from 'react-router-dom';
import SodasImg from './Sodas.jpg';

function Sodas() {
     return (
          <div className="Sodas"
               style={{ backgroundImage: `url(${SodasImg})` }}>
               <div className="Sodas-contents">
                    <h1>SODAS</h1>
                    <div>
                         <Link to="/" className='vm-link'>Go Back to Vending Machine</Link>
                    </div>
                    <div className="links">
                         <Link to="/cookies" className='link'>Cookies</Link>
                         <Link to="/chips" className='link'>Chips</Link>
                    </div>
               </div>
          </div>
     );
}

export default Sodas;