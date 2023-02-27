import React, { createContext, useMemo, useContext } from "react";
import InfoSection from "../components/mypage/InfoSection";
import { teckStackList } from "../utils/infoList";

const MyPage = () => {
  return (
    <div className="MyPage">
      <div className="MyPageLeft">
        <InfoSection
          className={"userProfile"}
          name={"프로필"}
          dataType={"userNickname"}
          tagType={"span"}
        />

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
        <InfoSection
          className={"userIntroductionInfo"}
          name={"자기소개"}
          dataType={"userIntroduction"}
          tagType={"span"}
        />

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
  );
};

export default MyPage;
