import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0; 
  background-color: #434C5E;
  text-align: center;
  justify-content: center;
  font-family: 'Roboto';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`;