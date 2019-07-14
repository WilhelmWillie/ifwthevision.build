import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.font.family};
    margin: 0;
  }
`;

export default GlobalStyle;
