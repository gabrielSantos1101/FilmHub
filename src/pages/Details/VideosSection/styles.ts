import styled from 'styled-components';

export const Container = styled.div`
  &.videosSection {
  position: relative;
  margin-bottom: 50px;

  .sectionHeading {
    font-size: 24px;
    color: white;
    margin-bottom: 25px;
  }

  .videos {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    margin-right: -20px;
    margin-left: -20px;
    padding: 0 20px;

    @media (min-width: 768px) {
      gap: 20px;
      margin: 0;
      padding: 0;
    }

    .videoItem {
      width: 150px;
      flex-shrink: 0;

      @media (min-width: 768px) {
        width: 25%;
      }

      cursor: pointer;

      .videoThumbnail {
        margin-bottom: 15px;
        position: relative;

        img {
          width: 100%;
          display: block;
          border-radius: 12px;
          transition: all 0.7s ease-in-out;
        }

        svg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 50px;
          height: 50px;
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
          img {
            opacity: 0.5;
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

      .videoTitle {
        color: white;
        font-size: 14px;
        line-height: 20px;

        @media (min-width: 768px) {
          font-size: 16px;
          line-height: 24px;
        }
      }
    }
  }

  .videoSkeleton {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    margin-right: -20px;
    margin-left: -20px;
    padding: 0 20px;

    @media (min-width: 768px) {
      gap: 20px;
      margin: 0;
      padding: 0;
    }

    .skItem {
      width: 150px;
      flex-shrink: 0;

      @media (min-width: 768px) {
        width: 25%;
      }

      .thumb {
        width: 100%;
        aspect-ratio: 16 / 9;
        border-radius: 12px;
        margin-bottom: 10px;
      }

      .row {
        height: 20px;
        width: 100%;
        border-radius: 10px;
        margin-bottom: 10px;
      }

      .row2 {
        height: 20px;
        width: 75%;
        border-radius: 10px;
      }
    }
  }
}
`;
