import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    margin-top: 45px;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img { 
    flex-shrink: 0;
  }

  ul {
    display: flex;
    list-style-type: none;

    li { 
      color: ${props => props.theme.colors.fontSecondary};
      font-weight: 500;

      + li {
          margin-left: 40px;
      }
    }
  }
`;

export const SignSignUp = styled.div`
    display: flex;
    align-items: center;

    strong {
      font-weight: 600;
      color: ${props => props.theme.colors.fontPrimary};
      margin-right: 30px;
    }
`;