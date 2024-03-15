import React from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css';
import VendingMachineImg from './VendingMachineImg.jpg';

function VendingMachine() {
     return (
          <div className="VendingMachine" style={{ backgroundImage: `url(${VendingMachineImg})` }}>
               <div className="VendingMachine-contents">
                    <h1>HELLO, I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</h1>
                    {/* <img src={VendingMachineImg} alt="Vending Machine" /> */}
                    <div className="links">
                         <Link to="/cookies">Cookies</Link>
                         <Link to="/chips">Chips</Link>
                         <Link to="/sodas">Sodas</Link>
                    </div>
               </div>
          </div>
     );
}

export default VendingMachine;