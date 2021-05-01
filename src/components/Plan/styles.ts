import styled from 'styled-components';

export const PlanContainer = styled.div`
  width: 330px;
  padding: 50px;
  padding-top: 79px;
  background-color: ${props => props.theme.colors.colorWhite};
  border: 2px solid ${props => props.theme.colors.borderColor};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: 0.2s border-color;

  &:hover {
    border-color: ${props => props.theme.colors.colorPrimary};
  }

  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;

    img { 
      margin-bottom: 30px;
    }

    strong {
      font-weight: 500;
      font-size: 1.125rem;
      line-height: 1.875rem;
      color: ${props => props.theme.colors.fontPrimary};
      margin-bottom: 30px;
    }

    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;

      li {
        display: flex;
        align-items: center;

        span {
          color: ${props => props.theme.colors.fontSecondary};
          font-size: 0.875rem;
          line-height: 1.875rem;
          margin-left: 20px;
        }
      }
    }
  }

  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;

    .plan {
      margin-bottom: 20px;

      strong {
        font-weight: 500;
        font-size: 1.5625rem;
        line-height: 1.875rem;
        color: ${props => props.theme.colors.fontPrimary};
      }

      span {
        font-size: 25px;
        line-height: 30px;
        color: ${props => props.theme.colors.fontSecondary};
      }
    }
  }
`;