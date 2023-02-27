import EditButton from "./EditButton";

const InfoSection = ({ name, className, buttonType, dataType }) => {
  const dummyData = {
    userNickname: ["닉네임"],
    userCollege: ["OO대학교/oo캠퍼스/컴퓨터공학과/학사"],
    userSkill: ["JavaScript", "React"],
    userJob: [],
    userExperience: [],
    userCareer: [],
    userIntroduction: [
      "반갑습니다. OO백화점 영업관리부분에 지원한 OOO이라고 합니다./n저는 택배회사에서 6개월간 인턴하면서 ‘데이터의 중요성’을 깨달았습니다./nCS업무를 하다보니 OO지역에서 유난히 클레임이 많이 나온다는 것을 느꼈습니다. 그래서 최근 1년간 클레임 데이터를 추출하여 지역별로 정리해서 건수를 확인했습니다. 확인해보니 OO지역이  유난히 많았고, 해당 지점과 연락을 해보니 기사님이 건강상의 이유로 근태가 좋지않아 업무가 점점 쌓이고, 실수가 많아졌다는 것입니다.",
    ],
    userBlog: ["https://github.com/abc", "https://velog.io/abc"],
  };

  return (
    <>
      <div className={className}>
        <header>
          <span>{name}</span>
          <EditButton type={buttonType} />
        </header>
        <section>
          {dummyData[dataType].map((it) => {
            return (
              <a href={it} target="_blank" rel="noopener noreferrer">
                {it}
              </a>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default InfoSection;