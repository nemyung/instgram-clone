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
import { HelperText } from "./SignUp.jsx";

import useStateWithValidation from "../hooks/useStateWithValidation.js";
import useSign from "../hooks/useSign";

const SignIn = () => {
  const [email, handleEmailChange, isEmailValid, emailValidationFailMessage] =
    useStateWithValidation("email", "");

  const [
    password,
    handlePasswordChange,
    isPasswordValid,
    passwordValidationFailMessage,
  ] = useStateWithValidation("password", "");

  const [loginFailMessage, login] = useSign("signIn");

  const history = useHistory();

  const handleLoginButtonClick = async (event) => {
    event.preventDefault();
    const payload = { email, password };
    const OK = await login(payload);
    if (OK) {
      history.replace("/");
    }
  };

  const buttonStatus = email && isEmailValid && password && isPasswordValid;

  return (
    <FullPageWrapper>
      <SignContainer c>
        <Logo my="40" />
        <FormControllerWrapper>
          <SignInput
            labelId="이메일"
            type="email"
            value={email}
            placeholder="이메일.."
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
            value={password}
            placeholder="비밀번호..."
            onChange={(e) => handlePasswordChange(e.target.value)}
            required
          />
          <HelperText OK={isPasswordValid}>
            {isPasswordValid || passwordValidationFailMessage}
          </HelperText>
        </FormControllerWrapper>
        <FormControllerWrapper>
          <SignButton
            type="button"
            disabled={!buttonStatus}
            onClick={handleLoginButtonClick}
          >
            로그인
          </SignButton>
          {loginFailMessage && <p>{loginFailMessage}</p>}
        </FormControllerWrapper>
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
