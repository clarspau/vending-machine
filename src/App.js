import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.css';
import VendingMachine from './VendingMachine';
import Cookies from './Cookies';
import Chips from './Chips';
import Sodas from './Sodas';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="cookies" element={<Cookies />} />
        <Route path="chips" element={<Chips />} />
        <Route path="sodas" element={<Sodas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
