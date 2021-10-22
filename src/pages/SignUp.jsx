import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Logo from "../components/Logo";
import SignInput from "../components/Sign/SignInput";
import FormControllerWrapper from "../components/Sign/FormControllerWrapper";
import SignContainer from "../components/Sign/SignContainer";
import SignButton from "../components/Sign/SignButton";
import KakaoButton from "../components/Sign/KakaoButton";
import Branch from "../components/Sign/Branch";
import FullPageWrapper from "../components/Sign/FullPageWrapper";
import { CustomLink } from "./SignIn";

import useStateWithValidation from "../hooks/useStateWithValidation";
import useSignUp from "../hooks/useSignUp";

const SignUp = () => {
  const [email, handleEmailChange, isEmailValid, emailValidationFailMessage] =
    useStateWithValidation("email", "");

  const [
    password,
    handlePasswordChange,
    isPasswordValid,
    passwordValidationFailMessage,
  ] = useStateWithValidation("password", "");

  const [
    passwordAgain,
    handlePasswordAgainChange,
    isPasswordAgainValid,
    passwordAgainValidationFailMessage,
  ] = useStateWithValidation("password", "");

  const [loginFailMessage, handleSignUp] = useSignUp();

  const history = useHistory();

  const handleButtonClick = async (event) => {
    event.preventDefault();
    const OK = await handleSignUp({ email, password });

    if (OK) {
      history.replace("/");
    }
  };

  const buttonStatus =
    email &&
    isEmailValid &&
    password &&
    isPasswordValid &&
    passwordAgain &&
    isPasswordAgainValid &&
    password === passwordAgain;

  return (
    <FullPageWrapper>
      <SignContainer c>
        <Logo my="10" />
        <MainTypo>친구들의 사진과 동영상을 보려면 가입하세요.</MainTypo>
        <KakaoButton />
        <Branch />
        <FormControllerWrapper>
          <SignInput
            labelId="이메일"
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            required
          />
          <HelperText OK={isEmailValid}>
            {isEmailValid || emailValidationFailMessage}
          </HelperText>
        </FormControllerWrapper>
        <FormControllerWrapper>
          <SignInput
            labelId="비밀번호"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
            minLength={3}
            maxLength={10}
          />
          <HelperText OK={isPasswordValid}>
            {isPasswordValid || passwordValidationFailMessage}
          </HelperText>
        </FormControllerWrapper>
        <FormControllerWrapper>
          <SignInput
            labelId="비밀번호확인"
            type="password"
            placeholder="비밀번호 확인"
            value={passwordAgain}
            onChange={(e) => handlePasswordAgainChange(e.target.value)}
          />
          <HelperText OK={isPasswordAgainValid}>
            {isPasswordAgainValid || passwordAgainValidationFailMessage}
          </HelperText>
        </FormControllerWrapper>
        <SignButton
          disabled={!buttonStatus}
          type="submit"
          onClick={handleButtonClick}
        >
          가입
        </SignButton>
        {loginFailMessage && <p>{loginFailMessage}</p>}
      </SignContainer>
      <SignContainer padding="10px 0">
        <p style={{ margin: "15px", fontSize: "14px", color: "#262626" }}>
          <span>계정이 있으신가요?</span>
          <CustomLink to="/sign_in">로그인</CustomLink>
        </p>
      </SignContainer>
    </FullPageWrapper>
  );
};

const MainTypo = styled.h2`
  font-size: 17px;
  font-weight: 600;
  line-height: 20px;
  margin: 0 40px 16px 40px;
  text-align: center;
  color: ${(props) => props.theme.color.darkGrey};
`;

const HelperText = styled.small`
  display: ${({ OK }) => (OK ? "none" : "block")};
  text-align: center;
  padding: 8px 0;
  color: ${({ OK, theme }) => (OK ? theme.color.success : theme.color.danger)};
  font-size: 12px;
`;

export default SignUp;
