import React from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css';
import VendingMachineImg from './VendingMachine.jpg';


function VendingMachine() {
     return (
          <div className="VendingMachine" style={{ backgroundImage: `url(${VendingMachineImg})` }}>
               <div className="VendingMachine-contents">
                    <h1 className="vending-machine-title">HELLO, I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</h1>
                    <div className="links">
                         <Link to="/cookies" className='link'>Cookies</Link>
                         <Link to="/chips" className='link'>Chips</Link>
                         <Link to="/sodas" className='link'>Sodas</Link>
                    </div>
               </div>
          </div>
     );
}

export default VendingMachine;