import styled from 'styled-components';

export const Container = styled.div`
  &.detailsBanner {
  width: 100%;
  background-color: ${({ theme }) => theme.black};
  padding-top: 100px;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    padding-top: 120px;
    min-height: 700px;
  }

  .backdrop-img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.1;
    overflow: hidden;

    .lazy-load-image-background {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }

  .opacity-layer {
    width: 100%;
    height: 250px;
    background: linear-gradient(180deg,
        rgba(4, 21, 45, 0) 0%,
        #04152d 79.17%);
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .content {
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 25px;

    @media (min-width: 768px) {
      gap: 50px;
      flex-direction: row;
    }

    .left {
      flex-shrink: 0;

      .posterImg {
        width: 100%;
        display: block;
        border-radius: 12px;

        @media (min-width: 768px) {
          max-width: 350px;
        }
      }
    }

    .right {
      color: white;

      .title {
        font-size: 28px;
        line-height: 40px;

        @media (min-width: 768px) {
          font-size: 34px;
          line-height: 44px;
        }
      }

      .subtitle {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 15px;
        font-style: italic;
        opacity: 0.5;

        @media (min-width: 768px) {
          font-size: 20px;
          line-height: 28px;
        }
      }

      .genres {
        margin-bottom: 25px;
        flex-flow: row wrap;
      }

      .overview {
        margin-bottom: 25px;

        .heading {
          font-size: 24px;
          margin-bottom: 10px;
        }

        .description {
          line-height: 24px;

          @media (min-width: 768px) {
            padding-right: 100px;
          }
        }
      }

      .circleRating {
        max-width: 70px;
        background-color: ${({ theme }) => theme.black2};

        @media (min-width: 768px) {
          max-width: 90px;
        }

        .CircularProgressbar-text {
          fill: white;
        }
      }

      .playbtn {
        display: flex;
        align-items: center;
        gap: 20px;
        cursor: pointer;

        svg {
          width: 60px;

          @media (min-width: 768px) {
            width: 80px;
          }
        }

        .text {
          font-size: 20px;
          transition: all 0.7s ease-in-out;
        }

        .triangle {
          stroke-dasharray: 240;
          stroke-dashoffset: 480;
          stroke: white;
          transform: translateY(0);
          transition: all 0.7s ease-in-out;
        }

        .circle {
          stroke: white;
          stroke-dasharray: 650;
          stroke-dashoffset: 1300;
          transition: all 0.5s ease-in-out;
        }

        &:hover {
          .text {
            color: ${({ theme }) => theme.pink};
          }

          .triangle {
            stroke-dashoffset: 0;
            opacity: 1;
            stroke: ${({ theme }) => theme.pink};
            animation: trailorPlay 0.7s ease-in-out;
          }

          .circle {
            stroke-dashoffset: 0;
            stroke: ${({ theme }) => theme.pink};
          }
        }
      }

      .row {
        display: flex;
        align-items: center;
        gap: 25px;
        margin-bottom: 25px;
      }

      .info {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        padding: 15px 0;
        display: flex;

        .infoItem {
          margin-right: 10px;
          display: flex;
          flex-flow: row wrap;
        }

        .text {
          margin-right: 10px;
          opacity: 0.5;
          line-height: 24px;

          &.bold {
            font-weight: 600;
            opacity: 1;
          }
        }
      }
    }
  }

  .detailsBannerSkeleton {
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 25px;

    @media (min-width: 768px) {
      gap: 50px;
      flex-direction: row;
    }

    .contentWrapper {
      display: flex;
      gap: 50px;
    }

    .left {
      flex-shrink: 0;
      width: 100%;
      display: block;
      border-radius: 12px;
      aspect-ratio: 1/1.5;

      @media (min-width: 768px) {
        max-width: 350px;
      }
    }

    .right {
      width: 100%;

      .row {
        width: 100%;
        height: 25px;
        margin-bottom: 20px;
        border-radius: 50px;

        &:nth-child(2) {
          width: 75%;
          margin-bottom: 50px;
        }

        &:nth-child(5) {
          width: 50%;
          margin-bottom: 50px;
        }
      }
    }
  }
}
`;
