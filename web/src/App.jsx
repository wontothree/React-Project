import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import MyPage from "./pages/MyPage";
import Signup from "./pages/Signup";
import SignupSecond from './pages/SignupSecond';


export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    userEmail: "",
    userPassword: "",
    userPasswordConfirm: "",
    userName: "",
    userBirthdateYear: "",
    userBirthdateMonth: "",
    userBirthdateDay: "",
    userSex: "",
    userPhone: "",

    userPicture: "",
    userNickname: "",
    userCollege: "",
    userSkill: "",
    userJob: "",
    userExperience: "",
    userCareer: "",
    userIntroduction: "",
    userBlog: "",
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />}></Route>
          <Route path="/main" element={<Main />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signupsecond" element={<SignupSecond />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
