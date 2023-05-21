import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Browse from './views/Browse';
import Home from './views/Home';
import Reading from './views/Reading';
import Details from './views/Details';
import NotFound404 from './views/NotFound404';
import { Routes, Route } from 'react-router-dom';
import Reading1Card from './views/Reading1Card';
import Reading3Spread from './views/Reading3Spread.js';
import LogIn from './views/LogIn';
import SignUp from './views/SignUp';

function App() {
  return (
    <>
    <Navbar />
      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/browse/:id" element={<Details />} />
      <Route path="/reading" element={<Reading />} />
      <Route path="/reading/1" element={<Reading1Card />} />
      <Route path="/reading/3" element={<Reading3Spread />} />
      <Route path="/login" element={<LogIn />} />
       <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
    </>
  );
};

export default App;