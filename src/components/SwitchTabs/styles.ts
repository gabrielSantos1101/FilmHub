import styled from "styled-components";

export const Container = styled.div`
  &.switchingTabs {
    height: 34px;
    background-color: white;
    border-radius: 20px;
    padding: 2px;
    .tabItems {
      display: flex;
      align-items: center;
      height: 30px;
      position: relative;
      .tabItem {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        color: ${({ theme }) => theme.black};
        font-size: 14px;
        position: relative;
        z-index: 1;
        cursor: pointer;
        transition: color ease 0.3s;
        &.active {
          color: white;
        }
      }
      .movingBg {
        height: 30px;
        width: 100px;
        border-radius: 15px;
        background-image: ${({ theme }) => theme.gradient};
        position: absolute;
        left: 0;
        transition: left cubic-bezier(0.88, -0.35, 0.565, 1.35) 0.4s;
      }
    }
  }
`;
