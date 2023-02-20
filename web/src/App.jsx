import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Detail from './pages/Detail';
import MyPage from './pages/MyPage';
import Signup from "./pages/Signup";
import SignupSecond from './pages/SignupSecond';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Main' element={<Main/>}/>
        <Route path='/Detail' element={<Detail/>}/>
        <Route path='/MyPage' element={<MyPage/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Signupsecond' element={<SignupSecond/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
