import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  html { scroll-behavior: smooth }

  * {
    padding: 0;
    margin: 0;
  }

  body { overflow-x : hidden}
`;
 
export default GlobalStyle;