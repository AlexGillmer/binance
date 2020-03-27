import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyles = createGlobalStyle`

${normalize()}

html {
  box-sizing: border-box;
  font-size: 100%;
  height: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
*, *::before, *::after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}
body{
  width: 100%;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1, h2, h3, h4, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, p, blockquote, th, td {
    margin: 0;
    padding: 0;
}
`;

export default GlobalStyles;
