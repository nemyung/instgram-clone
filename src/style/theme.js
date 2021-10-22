import { createGlobalStyle } from "styled-components";

const theme = {
  bg: {
    primary: "#FFF",
    secondary: "#FAFAFA",
    button: "#0095f6",
    "button-disabled": "rgba(0, 149, 246, 0.3)",
  },
  color: {
    black: "#262626",
    white: "#FFF",
    anchor: "#00376b",
    grey: "#DBDBDB",
    darkGrey: "#8E8E8E",
    success: "#1976D2",
    danger: "#FF5722",
  },
  breakpoint: {
    post: `@media screen and (min-width: 640px)`,
    tablet: `@media screen and (min-width: 768px)`,
    desktop: `@media screen and (min-width: 1024px)`,
  },
};

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif
  }

  a {
    color: ${(props) => props.theme.color.anchor};
  }
`;

export { theme, GlobalStyle };
