import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0; 
  background-color: #FBFBFB; 
 font-family: 'Roboto', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;

}

code {
  font-family: 'Fira Code', Courier, Monaco, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a:link, a:visited {
  color: black;
  text-decoration: none;
}

.green {
  background: #2ecc71;
}

.yellow {
   background: #c0392b;
}

.red {
    background: #f1c40f;
}
`;
