import React from 'react';
import '../CSS-files/App.css';
import Access from './Access';
import Cars from './Cars';
import Car from './Car';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  
  const [userRole, ] = useState(Math.random() >= 0.5);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Access userRole={userRole}/>} />
          <Route path="/home" element={<Cars />} />
          <Route path="/home/:carModel" element={<Car userRole={userRole}/>} />
          </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
