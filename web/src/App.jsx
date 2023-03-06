import React, { createContext, useState, useReducer, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import Signup from "./pages/Signup";
import SignupSecond from "./pages/SignupSecond";

const reducer = (state, action) => {
  let copyState = { ...state };

  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      copyState[action.dataType] = [
        action.newData,
        ...copyState[action.dataType],
      ];
      return copyState;
    }
    case "REMOVE": {
      copyState[action.dataType] = copyState[action.dataType].filter(
        v => v !== action.delData
      );

      return copyState;
    }
    default:
      return state;
  }
};

export const dataStateContext = React.createContext();
export const dataDispatchContext = React.createContext();
export const UserContext = createContext();

const initData = {
  userNickname: "봄여름가을겨을",
  userCollege: "OO대학교/oo캠퍼스/컴퓨터공학과/학사",
  userSkills: ["JavaScript", "React"],
  userJob: [],
  userExperience: 'dddd',
  userCareer: 'ssss',
  userIntroduction: [
    "반갑습니다. OO백화점 영업관리부분에 지원한 OOO이라고 합니다./n저는 택배회사에서 6개월간 인턴하면서 ‘데이터의 중요성’을 깨달았습니다./nCS업무를 하다보니 OO지역에서 유난히 클레임이 많이 나온다는 것을 느꼈습니다. 그래서 최근 1년간 클레임 데이터를 추출하여 지역별로 정리해서 건수를 확인했습니다. 확인해보니 OO지역이  유난히 많았고, 해당 지점과 연락을 해보니 기사님이 건강상의 이유로 근태가 좋지않아 업무가 점점 쌓이고, 실수가 많아졌다는 것입니다.",
  ],
  userBlog: ["https://github.com/abc", "https://velog.io/abc"],
};

function App() {

  const [userSignupData, setUserSignupData] = useState({
    userEmail: "",
    userPassword: "",
    userPasswordConfirm: "",
    userName: "",
    userBirthdateYear: "",
    userBirthdateMonth: "",
    userBirthdateDay: "",
    userSex: "",
    userPhone: "",

    userPicture: '',
    userNickname: '',
    userCollege: '',
    userSkills: [],
    userJob: [],
    userExperience: '',
    userCareer: '',
    userIntroduction: '',
    userBlog: '',
  });

  // useEffect(() => {
  //   console.log(userSignupData)
  // })



  const [dummyData, dispatch] = useReducer(reducer, 0);

  useEffect(() => {
    dispatch({ type: "INIT", data: initData });
    console.log(initData)
  }, []);

  const onCreate = (dataType, newData) => {
    dispatch({
      type: "CREATE",
      dataType,
      newData,
    });
  };

  // REMOVE
  const onRemove = (dataType, delData) => {
    dispatch({ type: "REMOVE", dataType, delData });
  };

  return (
    <dataStateContext.Provider value={dummyData}>
      <dataDispatchContext.Provider value={{ onCreate, onRemove }}>
      <UserContext.Provider value={{ userSignupData, setUserSignupData }}>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signupsecond" element={<SignupSecond />} />
          </Routes>
        </BrowserRouter>
        </UserContext.Provider>
      </dataDispatchContext.Provider>
    </dataStateContext.Provider>
  );
}

export default App;
