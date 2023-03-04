import { UserContext } from "../App";
import React, { useContext } from "react";
import "../components/home.css";
import { useNavigate } from "react-router-dom";
import programming from "../assets/programmer.mp4";

import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";

import jwt_decode from "jwt-decode";

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const responseGoogle = async response => {
    let decodedHeader = jwt_decode(response.credential);
    console.log(decodedHeader);
    const { email, name, picture } = decodedHeader;

    setUser(prev => ({
      ...prev,
      userEmail: email,
      userPassword: "googleLogin",
      userPasswordConfirm: "googleLogin",
      userName: name,
      userPicture: picture,
    }));

    navigate("/signupsecond");
  };

  const clickToSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="home__container">
      <div className="home__container-video-login">
        <video
          src={programming}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="home__container-video"
        ></video>
        <div className="home__container-login__container">
          <div className="home__container-login__container-google">
            <GoogleOAuthProvider
              clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
            >
              <GoogleLogin
                onSuccess={responseGoogle}
                onError={responseGoogle}
                cookiePolicy="single_host_origin"
              />
            </GoogleOAuthProvider>
          </div>
          <div className="home__container-login__container-signup">
            <button type="button" onClick={clickToSignup}>
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
