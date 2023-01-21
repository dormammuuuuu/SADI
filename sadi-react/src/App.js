import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SetUp from './pages/SetUp';
import Home from './pages/Home';

function App() {

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/setup' element={<SetUp />} />
      <Route path='/*' element={<Home />} />
    </Routes>

  );
}

export default App;
