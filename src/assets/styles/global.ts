import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
    background-color: ${({ theme }) => theme.black};
    font-family: Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 1;
    font-weight: 500;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .skeleton {
    position: relative;
    overflow: hidden;
    background-color: #0a2955;

    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateX(-100%);
      background-image: linear-gradient(
        90deg,
        rgba(#193763, 0) 0,
        rgba(#193763, 0.2) 20%,
        rgba(#193763, 0.5) 60%,
        rgba(#193763, 0)
      );
      animation: shimmer 2s infinite;
      content: "";
    }

    @keyframes shimmer {
      100% {
        transform: translateX(100%);
      }
    }
  }
`;
