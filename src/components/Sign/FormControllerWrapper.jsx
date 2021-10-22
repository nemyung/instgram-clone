import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FormControllerWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

FormControllerWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default FormControllerWrapper;
