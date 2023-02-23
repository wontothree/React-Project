import React from "react";
import { teckStackList } from "../utils/infoList";

const dummyData = {
  name: "닉네임",
  education: {
    school: "OO대학교",
    campus: "OO캠퍼스",
    degree: "학사",
    yearOfAdmission: 2020,
  },
};

teckStackList;

const MyPage = () => {
  return (
    <div className="MyPage">
      <div className="MyPageLeft"></div>
      <div className="MyPageRight"></div>
    </div>
  );
};

export default MyPage;
