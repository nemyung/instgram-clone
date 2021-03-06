import * as React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Permit from "./Permit";

function App() {
  return (
    <MainWrapper>
      <Switch>
        <Route path="/sign_in">
          <SignIn />
        </Route>
        <Route path="/sign_up">
          <SignUp />
        </Route>
        <>
          <Permit>
            <Route path="/">
              <h1>로그인 갱신 성공...</h1>
            </Route>
          </Permit>
        </>
      </Switch>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  background-color: ${(props) => props.theme.bg.secondary};
  height: 100%;
  min-height: 100vh;
`;

export default App;
