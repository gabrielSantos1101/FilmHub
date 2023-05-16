import styled from 'styled-components';

export const Container = styled.div`
  &.castSection {
  position: relative;
  margin-bottom: 50px;

  .sectionHeading {
    font-size: 24px;
    color: white;
    margin-bottom: 25px;
  }

  .listItems {
    display: flex;
    gap: 20px;
    overflow-y: hidden;
    margin-right: -20px;
    margin-left: -20px;
    padding: 0 20px;

    @media (min-width: 768px) {
      margin: 0;
      padding: 0;
    }

    .listItem {
      text-align: center;
      color: white;

      .profileImg {
        width: 125px;
        height: 125px;
        border-radius: 50%;
        overflow: hidden;
        margin-bottom: 15px;

        @media (min-width: 768px) {
          width: 175px;
          height: 175px;
          margin-bottom: 25px;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }
      }

      .name {
        font-size: 14px;
        line-height: 20px;
        font-weight: 600;

        @media (min-width: 768px) {
          font-size: 18px;
          line-height: 24px;
        }
      }

      .character {
        font-size: 14px;
        line-height: 20px;
        opacity: 0.5;

        @media (min-width: 768px) {
          font-size: 16px;
          line-height: 24px;
        }
      }
    }
  }

  .castSkeleton {
    display: flex;
    gap: 20px;
    overflow-y: hidden;
    margin-right: -20px;
    margin-left: -20px;
    padding: 0 20px;

    @media (min-width: 768px) {
      margin: 0;
      padding: 0;
    }

    .skItem {
      .circle {
        width: 125px;
        height: 125px;
        border-radius: 50%;
        margin-bottom: 15px;

        @media (min-width: 768px) {
          width: 175px;
          height: 175px;
          margin-bottom: 25px;
        }
      }

      .row {
        width: 100%;
        height: 20px;
        border-radius: 10px;
        margin-bottom: 10px;
      }

      .row2 {
        width: 75%;
        height: 20px;
        border-radius: 10px;
        margin: 0 auto;
      }
    }
  }
}
`;
