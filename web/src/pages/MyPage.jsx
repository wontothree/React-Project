import React, { createContext, useMemo, useContext } from "react";
import InfoSection from "../components/mypage/InfoSection";
import { dataStateContext } from "../App.jsx";
import "../components/mypage/myPage.css";

const MyPage = () => {
  const dummyData = useContext(dataStateContext);
  return Object.keys(dummyData).length !== 0 ? (
    <div className="MyPage">
      <div className="MyPageLeft">
        <div>
          <header>
            <span className="title">프로필</span>
          </header>
          <br />
          <img src={dummyData.userPicture} alt="user" />
          <span>{dummyData.userNickname}</span>
        </div>

        <InfoSection
          className={"userBlogInfo"}
          name={"기술 블로그 / 깃허브"}
          dataType={"userBlog"}
          tagType={"a"}
        />

        <InfoSection
          className={"userSkillInfo"}
          name={"기술 스텍"}
          dataType={"userSkill"}
          tagType={"TextBox"}
        />

        <InfoSection
          className={"userJobInfo"}
          name={"희망 직무"}
          dataType={"userJob"}
          tagType={"TextBox"}
        />
      </div>

      <div className="MyPageRight">
        <div>
          <header>
            <span className="title">자기소개</span>
          </header>
          <br />
          <span>{dummyData.userIntroduction}</span>
        </div>

        <InfoSection
          className={"userCollegeInfo"}
          name={"학력"}
          dataType={"userCollege"}
          tagType={"span"}
        />

        <InfoSection
          className={"userCareerInfo"}
          name={"수상 경력/자격증"}
          dataType={"userCareer"}
          tagType={"span"}
        />

        <InfoSection
          className={"userExperienceInfo"}
          name={"프로젝트 경험 / 실무 경험"}
          dataType={"userExperience"}
          tagType={"span"}
        />
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default MyPage;
