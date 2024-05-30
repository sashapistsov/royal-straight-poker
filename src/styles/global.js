import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #121212;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
  }

  input, button {
    margin: 5px;
    padding: 10px;
    border: none;
    border-radius: 5px;
  }

  input {
    background-color: #333;
    color: white;
  }

  button {
    background-color: #444;
    color: white;
    cursor: pointer;
  }

  button:hover {
    background-color: #555;
  }
`;

export default GlobalStyle;
