import { createGlobalStyle, css } from "styled-components";
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

export default GlobalStyles;
