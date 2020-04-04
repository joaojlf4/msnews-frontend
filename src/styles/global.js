import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root{
    height: 100%;
  }
  body{
    background: #f0f0f0;
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
  }
  input, textarea{
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    border: 0;
    outline: 0;
  }
`;