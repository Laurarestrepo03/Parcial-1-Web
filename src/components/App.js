import React from 'react';
import '../CSS-files/App.css';
import Access from './Access';
import Cars from './Cars';
import Car from './Car';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {

  const [cars, setCars] = useState([]);
  const [userRole, ] = useState(Math.random() >= 0.5);

  useEffect(()=>{
    fetch("https://raw.githubusercontent.com/Laurarestrepo03/Parcial-1-Web/main/datos.json")
    .then(response => response.json()).then(data => setCars(data));
  },[]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Access userRole={userRole}/>} />
          <Route path="/home" element={<Cars cars={cars} />} />
          <Route path="/home/:carModel" element={<Car cars={cars} userRole={userRole}/>} />
          </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
