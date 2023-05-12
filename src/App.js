import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Wiki from './views/Wiki';
import Home from './views/Home';
import Reading from './views/Reading';
import Details from './views/Details';
import NotFound404 from './views/NotFound404';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wiki" element={<Wiki />} />
      <Route path="/card/:id" element={<Details />} />
      <Route path="/reading" element={<Reading />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
    </>
  );
};

export default App;