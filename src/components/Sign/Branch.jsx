import React from 'react';
import styled from 'styled-components';

const Branch = () => (
  <Wrapper>
    <Bar />
    <BranchText>또는</BranchText>
    <Bar />
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 10px 40px 18px;
`;

const Bar = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  height: 1px;
  background-color: ${({ theme }) => theme.color.darkGrey};
  position: relative;
  top: 0.45em;
`;

const BranchText = styled.div`
  color: ${({ theme }) => theme.color.darkGrey};
  font-size: 13px;
  font-weight: 600;
  margin: 0 18px;
  text-transform: uppercase;
`;

export default Branch;
