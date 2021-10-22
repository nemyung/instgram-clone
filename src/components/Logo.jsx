import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import logoSrc from "../assets/logo.png";

const Logo = ({ h, my }) => {
  return (
    <LogoWrapper my={my} h={h}>
      <img src={logoSrc} alt="logo" />
    </LogoWrapper>
  );
};

Logo.propTypes = {
  h: PropTypes.bool,
  my: PropTypes.string,
};

Logo.defaultProps = {
  h: false,
  my: false,
};

const LogoWrapper = styled.div`
  max-width: ${({ h }) => (h ? "103px" : "70%")};
  height: auto;
  display: flex;
  align-items: center;
  margin-top: ${({ my }) => my || 0}px;
  margin-bottom: ${({ my }) => my || 0}px;

  & img {
    object-fit: cover;
    max-width: 100%;
  }
`;

export default Logo;
