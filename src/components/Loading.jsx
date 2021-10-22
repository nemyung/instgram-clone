import React from "react";
import styled from "styled-components";
import { ReactComponent as Spinner } from "../assets/spinner.svg";

const Loading = () => {
  return (
    <LoadingWrapper>
      <Spinner />
    </LoadingWrapper>
  );
};

const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.55);
`;

export default Loading;
