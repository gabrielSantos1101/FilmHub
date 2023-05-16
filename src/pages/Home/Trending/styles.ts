import styled from "styled-components";

export const Container = styled.div`
  &.carouselSection {
    position: relative;
    margin-bottom: 70px;

    & > .contentWrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    .carouselTitle {
      font-size: 24px;
      color: #fff;
      font-weight: normal;
    }
  }
`;
