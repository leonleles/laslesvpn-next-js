import styled from 'styled-components';

export const FooterContainer = styled.footer`
    width: 100%;
    padding-top: 180px;
    padding-bottom: 100px;
    background-color: ${props => props.theme.colors.colorWhiteLite};
`;

export const FooterRigthWrapper = styled.div`
  display: flex;
  flex-direction: column;

  p { 
    margin-top: 20px;
    color: ${props => props.theme.colors.fontSecondary};
    line-height: 1.875rem;
  }
`;

export const Socials = styled.div`
  margin-top: 30px;
  display: flex;

  button + button {
    margin-left: 20px;
  }
`;

export const CopyRight = styled.span`
  margin-top: 30px;
  color: ${props => props.theme.colors.fontSecondary};
  line-height: 1.875rem;
`;

export const FooterLeftWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 126px;

  .column {
    display: flex;
    flex-direction: column;

    strong {
      color: ${props => props.theme.colors.fontPrimary};
      font-size: 1.125rem;
      line-height: 1.875rem;
      margin-bottom: 20px;
    }

    ul {
      list-style-type: none;

      li {
        color: ${props => props.theme.colors.fontSecondary};
        line-height: 1.875rem;

        + li {
          margin-top: 10px;
        }
      }
    }
  }
`;