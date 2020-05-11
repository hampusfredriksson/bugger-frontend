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

a:link {
  color: black;
  text-decoration: none;
}

.tg {
  
  border-collapse: collapse;
  border-spacing: 0;
  border-color: #000000;
}
.tg td {
  font-family: Arial, sans-serif;
  font-size: 14px;
  padding: 10px 5px;
  border-style: solid;
  border-width: 1px;
  overflow: hidden;
  word-break: normal;
  border-color: #000000;
  color: #333;
  background-color: #fff;
}
.tg th {
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: normal;
  padding: 10px 5px;
  border-style: solid;
  border-width: 1px;
  overflow: hidden;
  word-break: normal;
  border-color: #000000;
  color: #333;
  background-color: #f0f0f0;
}
.tg .tg-ycr8 {
  background-color: #ffffff;
  text-align: left;
  vertical-align: top;
}
.tg .tg-a02x {
  font-size: 100%;
  background-color: #ffffff;
  text-align: left;
  vertical-align: top;
}

.tg .tg-6hdc {
  font-size: 100%;
  background-color: #ffffff;
  text-align: left;
  vertical-align: top;
}
.tg .tg-i81m {
  background-color: #ffffff;
  text-align: center;
  vertical-align: top;
}

`;
