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
        <Route path='/main' element={<Main/>}/>
        <Route path='/detail' element={<Detail/>}/>
        <Route path='/mypage' element={<MyPage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signupsecond' element={<SignupSecond/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
