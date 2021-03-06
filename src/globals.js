import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
*::after,
*::before {
box-sizing: border-box;

}
body {
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  margin: 0;    
  padding: 0;    
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: all 0.25s linear;
}
`;
