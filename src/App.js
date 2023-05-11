import React from 'react'
import Wiki from './views/Wiki';
import Home from './views/Home';
import Reading from './views/Reading';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    //Navbar here

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wiki" element={<Wiki />} />
      <Route path="/reading" element={<Reading />} />
    </Routes>
  );
};

export default App;