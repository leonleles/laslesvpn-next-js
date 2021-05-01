import styled from 'styled-components';

export const Button = styled.button`
  padding: 17.5px 77.5px;
  background: ${props => props.theme.colors.colorPrimary};
  border-radius: 10px;
  color: ${props => props.theme.colors.fontWhite};
  position: relative;
  font-weight: bold;
  line-height: 1.5625rem;

  &:after {
    width: 90%;
    height: 100%;
    background: ${props => props.theme.colors.colorPrimary};
    filter: blur(15px);
    top: 50%;
    content: ' ';
    position: absolute;
    left: 5%;
    opacity: 0.35;
  }
`;