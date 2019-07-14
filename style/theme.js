import { css } from "styled-components";

const colors = {
  white: "#FFFFFF",
  black: "#04080F",
  dark: "#0B2027",
  yellow: "#EAD637",
  blue: "#507DBC"
};

const font = {
  family: `'Literata', serif`
};

const breakpoints = {
  tablet: "768px",
  phone: "425px"
};

const theme = {
  colors,
  font,
  breakpoints,
  media: {
    tablet: (...args) => css`
      @media screen and (max-width: ${breakpoints.tablet}) {
        ${css(...args)};
      }
    `,
    phone: (...args) => css`
      @media screen and (max-width: ${breakpoints.phone}) {
        ${css(...args)};
      }
    `
  }
};

export default theme;
