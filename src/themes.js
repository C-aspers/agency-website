import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "white",
  color: "black",
};

export const darkTheme = {
  body: "black",
  color: "white",
};

export const GlobalStyles = createGlobalStyle`

  body {
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.body};

  }
`;
