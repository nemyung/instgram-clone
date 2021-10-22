import styled from 'styled-components';

const SignButton = styled.button`
  width: 268px;
  height: 30px;
  margin: 8px 40px;
  padding: 5px 9px;
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.bg.primary};
  background: ${({ theme }) => theme.bg.button};
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;

  &:disabled {
    background: ${({ theme }) => theme.bg['button-disabled']};
  }
`;

export default SignButton;
