import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  margin-top: 116px;
`;

export const SectionPresetation = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 130px;

  .rightWrapper {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-right: 40px;
    flex-shrink: 0;

    h1 {
      font-weight: 500;
      font-size: 3.125rem;
      line-height: 4.375rem;
      color: ${props => props.theme.colors.fontPrimary}
    }

    p {
      margin-top: 20px;
      line-height: 1.875rem;
      color: ${props => props.theme.colors.fontSecondary};
      margin-bottom: 50px;
    }
  }
`;

export const SectionDetailsService = styled.section`
  width: 100%;
  background-color: ${props => props.theme.colors.colorWhite};
  border-radius: 10px;
  padding: 37.21px 90px;
  position: relative;
  margin-bottom: 95px;
  box-shadow: 0px 22px 27px 7px rgba(13, 16, 37, 0.06);

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;

    li {
      display: flex;
      align-items: center;

      .circle {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background: ${props => props.theme.colors.backgroundPrimary};
        margin-right: 36.5px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .right {
        display: flex;
        flex-direction: column;

        strong {
          font-size: 1.5625rem;
          line-height: 1.875rem;
          color: ${props => props.theme.colors.fontPrimary}
        }

        span {
          font-size: 1.25rem;
          line-height: 1.875rem;
          color: ${props => props.theme.colors.fontSecondary};
          margin-top: 5px;
        }
      }
    }

    hr {
      width: 0px;
      height: 125.57px;
      border: 1px solid ${props => props.theme.colors.borderColor2};
      margin: 0 115px;
    }
  }
`;

export const SectionDifferentials = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 130px;

  .rightWrapper {
    display: flex;
    flex-direction: column;

    h2 {
      font-weight: 500;
      font-size: 35px;
      line-height: 50px;
      color: ${props => props.theme.colors.fontPrimary};
      margin-bottom: 20px;
    }

    p {
      line-height: 1.875rem;
      color: ${props => props.theme.colors.fontSecondary};
      margin-bottom: 20px;
    }

    ul {
      display: flex;
      flex-direction: column;

      li {
        display: flex;
        align-items: center;

        .icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${props => props.theme.colors.colorSecondary};
          margin-right: 12px;
        }

        span {
          font-size: 0.875rem;
          line-height: 1.875rem;
          color: ${props => props.theme.colors.fontSecondary};
        }

        + li {
          margin-top: 21px;
        }
      }
    }
  }
`;

export const PlanNetWorkWrapper = styled.div`
  width: 100%;
  padding-bottom: 30px;
  padding-top: 80px;
  background: linear-gradient(180deg, #F8F8F8 -45.04%, rgba(248, 248, 248, 0) 88.56%);
`;

export const SectionPlan = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 149px;

  h3 {
    font-weight: 500;
    font-size: 2.1875rem;
    line-height: 3.125rem;
    color: ${props => props.theme.colors.fontPrimary};
    text-align: center;
  }

  p {
    line-height: 1.875rem;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 60px;
    color: ${props => props.theme.colors.fontSecondary};
  }

  .plans {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const SectionLocations = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  h4 {
    font-weight: 500;
    font-size: 2.1875rem;
    line-height: 3.125rem;
    color: ${props => props.theme.colors.fontPrimary};
    margin-bottom: 20px;
    text-align: center;
  }

  p {
    line-height: 1.875rem;
    color: ${props => props.theme.colors.fontSecondary};
    margin-bottom: 20px;
    margin-bottom: 155px;
    text-align: center;
  }
`;

export const SectionCostumers = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 35px;
  margin-bottom: 50px;
`;

export const SectionReports = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 87px;

  h5 {
    font-weight: 500;
    font-size: 2.1875rem;
    line-height: 3.125rem;
    color: ${props => props.theme.colors.fontPrimary};
    margin-bottom: 20px;
    text-align: center;
  }

  > p {
    font-size: 1rem;
    line-height: 1.875rem;
    color: ${props => props.theme.colors.fontSecondary};
    margin-bottom: 60px;
    text-align: center;
  }

  .slider-wrapper {
    width: calc(100% + ((100vw - 1158px) / 2));

    .swiper-container {
      padding-bottom: calc(82px + 15px);

      .swiper-pagination {
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        
        .swiper-pagination-bullet {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: ${props => props.theme.colors.backgroundSeconday};
          cursor: point;
          transition: 0.2s all;

          &.swiper-pagination-bullet-active {
            width: 45px;
            background: ${props => props.theme.colors.colorPrimary};
            border-radius: 7.5px;
          }

          + .swiper-pagination-bullet {
            margin-left: 15px;
          } 
        }
      }
    }
  }
`;

export const SectionSubscribe = styled.section`
  background: ${props => props.theme.colors.colorWhite};
  padding: 58px 70px;
  border-radius: 10px;
  margin-bottom: -116px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  box-shadow: 0px 22px 27px 7px rgba(13, 16, 37, 0.06);

  .right {
      h6 {
        font-weight: 500;
        font-size: 2.1875rem;
        line-height: 2.8125rem;
        margin-bottom: 20px;
        color: ${props => props.theme.colors.fontPrimary};
      }

      p {
        line-height: 1.875rem;
        color: ${props => props.theme.colors.fontSecondary};
      }
  }
`;