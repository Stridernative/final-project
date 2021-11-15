import './App.css';
import NavBar from './NavBar/Index.js';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './Pages/Home.js';
import Services from './Pages/Services.js';
import Appointments from './Pages/Appointments.js';
import Quotes from './Pages/Quotes.js';
import Financing from './Pages/Financing.js';
import Warranties from './Pages/Warranties.js';
import HassleFree from './Pages/HassleFree';
import Login from './Login/Login'


function App() {
  return (
    <div >
        <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Services" element={<Services/>}/>
        <Route exact path="/Appointments" element={<Appointments/>}/>
        <Route exact path="/Quotes" element={<Quotes/>}/>
        <Route exact path="/Warranties" element={<Warranties/>}/>
        <Route exact path="/Financing" element={<Financing/>}/>
        <Route exact path="/Login" element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
