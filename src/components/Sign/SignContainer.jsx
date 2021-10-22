import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SignContainer = ({ children, c }) => {
  return <Container c={c}>{children}</Container>;
};

SignContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  c: PropTypes.bool,
};

SignContainer.defaultProps = {
  c: false,
};

const Container = styled.div`
  width: 350px;
  padding: 10px 0;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")};
  margin: 0 0 10px;
  margin-bottom: 12px;
  background: ${({ theme }) => theme.bg.primary};
  display: flex;
  flex-direction: ${({ c }) => (c ? "column" : "row")};
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 3px;
`;

export default SignContainer;
