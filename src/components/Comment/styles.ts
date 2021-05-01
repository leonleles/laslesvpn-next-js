import styled from 'styled-components';

export const CommentContainer = styled.div`
  border-radius: 10px;
  border: 2px solid ${props => props.theme.colors.borderColor};
  padding: 29px;
  display: flex;
  flex-direction: column;
  transition: 0.2s border-color;
  min-height: 253px;

  &:hover {
    border-color: ${props => props.theme.colors.colorPrimary}
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    .wrapper {
      display: flex;
      align-items: center;

      img {
        border-radius: 50%;
        margin-right: 21px;
      }

      .origin {
        display: flex;
        flex-direction: column;

        strong {
          font-weight: 500;
          font-size: 1.125rem;
          color: ${props => props.theme.colors.fontPrimary};
          margin-bottom: 5px;
        }

        span {
          font-size: 0.875rem;
          color: ${props => props.theme.colors.fontSecondary};
        }
      }
    }

    .rating {
      display: flex;
      align-items: center;

      span { 
        margin-right: 10px;
        font-size: 1rem;
        color: ${props => props.theme.colors.fontPrimary};
      }
    }
  }

  p {
    text-align: left;
    line-height: 1.875rem;
    color: ${props => props.theme.colors.fontPrimary};
  }
`;