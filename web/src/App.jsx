import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Signup from "./pages/Signup";
import Signup1 from "./pages/Signup__";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signup1' element={<Signup1/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
