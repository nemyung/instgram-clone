import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import KakaoLoginImageSrc from "../../assets/kakao.png";

const KakaoButton = ({ onClick }) => {
  return (
    <ButtonImage
      onClick={onClick}
      src={KakaoLoginImageSrc}
      alt="kakao login button"
    />
  );
};

KakaoButton.propTypes = {
  onClick: PropTypes.func,
};

KakaoButton.defaultProps = {
  onClick: () => {},
};

const ButtonImage = styled.img`
  cursor: pointer;
  margin-bottom: 24px;
`;

export default KakaoButton;
