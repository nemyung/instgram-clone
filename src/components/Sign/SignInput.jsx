import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SignInput = ({ labelId, ...rest }) => {
  return (
    <CustomLabel htmlFor={labelId}>
      <CustomInput id={labelId} {...rest} />
    </CustomLabel>
  );
};

SignInput.propTypes = {
  labelId: PropTypes.string.isRequired,
};

const CustomLabel = styled.label`
  display: block;
  width: 100%;
  height: 36px;
  padding: 0 40px 6px;
`;

const CustomInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 9px 0 7px 8px;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.color.darkGrey};
  background: ${({ theme }) => theme.bg.secondary};
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 3px;

  &::placeholder {
    color: ${({ theme }) => theme.color.darkGrey};
    font-size: 12px;
  }

  &:focus {
    outline: none;
    border: 1px solid #767676;
  }
`;

export default SignInput;
