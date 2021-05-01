import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  html { 
    font-size: 100%;
  }

  body,
  button,
  input,
  textarea {
    font-family: 'Rubik', sans-serif;
    font-size: 1rem;
  }
`