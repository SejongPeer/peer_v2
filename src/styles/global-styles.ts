import styled, { createGlobalStyle, css } from "styled-components";
import { COLORS } from "../theme";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    font-family: 'Pretendard', sans-serif;
  }
  
  .flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
   
  html,
  body {
    height: 100%;
    /* max-width: 390px; */
    /* display: flex;
    justify-content: center; */
  }
  body {
    /* line-height: 1.5; */
    -webkit-font-smoothing: antialiased;
  }
  
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  
  #root,
  #__next {
    isolation: isolate;
  }
`;

export const buttonStyle = css`
  width: 100%;
  height: 56px;
  background-color: ${COLORS.main};
  border-radius: 35px;
  color: ${COLORS.white};
  font-weight: 800;
  font-size: 18px;
`;

// Head 1 스타일 정의
export const Head1 = css`
  font-size: 24px;
  font-weight: bold;
`;

// Head 2 스타일 정의
export const Head2 = css`
  font-size: 22px;
  font-weight: bold;
`;

// Title 1 스타일 정의
export const Title1 = css`
  font-size: 20px;
  font-weight: 600;
`;

// Title 2 스타일 정의
export const Title2 = css`
  font-size: 18px;
  font-weight: 600;
`;

// Body1 semibold 스타일 정의
export const Body1Sb = css`
  font-size: 16px;
  font-weight: 600;
`;

export const Body1M = css`
  font-size: 16px;
  font-weight: 500;
`;

// Body1 regular 스타일 정의
export const Body1R = css`
  font-size: 16px;
  font-weight: 400;
`;

export const Body2Sb = css`
  font-size: 15px;
  font-weight: 600;
`;

// Body1 regular 스타일 정의
export const Body2R = css`
  font-size: 15px;
  font-weight: 500;
`;

// Body1 regular 스타일 정의
export const Body3Sb = css`
  font-size: 14px;
  font-weight: 600;
`;

// Body1 regular 스타일 정의
export const Body3R = css`
  font-size: 14px;
  font-weight: 500;
`;

// Caption 스타일 정의
export const Caption = css`
  font-size: 12px;
  font-weight: 500;
`;

export default GlobalStyles;
