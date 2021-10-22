import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import SignContainer from "../components/Sign/SignContainer.jsx";
import FormControllerWrapper from "../components/Sign/FormControllerWrapper.jsx";
import FullPageWrapper from "../components/Sign/FullPageWrapper.jsx";
import SignInput from "../components/Sign/SignInput.jsx";
import Branch from "../components/Sign/Branch.jsx";
import KakaoButton from "../components/Sign/KakaoButton.jsx";
import SignButton from "../components/Sign/SignButton.jsx";
import Logo from "../components/Logo.jsx";

const SignIn = () => {
  const [userId, setUserId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [failMessage, setFailMessage] = React.useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLoginButtonClick = async (event) => {
    event.preventDefault();
  };

  const buttonStatus = Boolean(userId) && password.length > 3;

  return (
    <FullPageWrapper>
      <SignContainer c>
        <Logo my="40" />
        <FormControllerWrapper>
          <SignInput
            labelId="아이디"
            type="email"
            value={userId}
            placeholder="아이디"
            onChange={(e) => setUserId(e.target.value)}
            minLength={3}
            maxLength={10}
          />
        </FormControllerWrapper>
        <FormControllerWrapper>
          <SignInput
            labelId="비밀번호"
            type="password"
            value={password}
            placeholder="비밀번호"
            onChange={(e) => setPassword(e.target.value)}
            minLength={4}
            maxLength={20}
          />
        </FormControllerWrapper>
        <FormControllerWrapper>
          <SignButton
            type="button"
            disabled={!buttonStatus}
            onClick={handleLoginButtonClick}
          >
            로그인
          </SignButton>
        </FormControllerWrapper>
        {failMessage && <p>{failMessage}</p>}
        <Branch />
        <KakaoButton />
      </SignContainer>
      <SignContainer padding="10px 0">
        <p style={{ margin: "15px", fontSize: "14px", color: "#262626" }}>
          <span>계정이 없으신가요?</span>
          <CustomLink to="/sign_up">가입하기</CustomLink>
        </p>
      </SignContainer>
    </FullPageWrapper>
  );
};

export const CustomLink = styled(Link)`
  font-weight: 600;
  color: ${({ theme }) => theme.bg.button};
  margin-left: 5px;
  text-decoration: none;
`;

export default SignIn;
