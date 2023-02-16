import * as theme from "./Theme";
const { createGlobalStyle } = require("styled-components");

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: hsl(0, 0%, 100%);
  color: hsl(0, 1%, 16%);
  font-family: monospace;
  overflow-x: hidden;
}
// theme buttons color
body {
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: monospace;
  overflow-x: hidden;
}

// theme buttons color
.light {
  background-color: ${({ theme }) => theme.colors.header};
}
.dark {
  background-color: ${({ theme }) => theme.colors.header};
}
.blue {
  background-color: ${({ theme }) => theme.colors.header};
}
.green {
  background-color: ${({ theme }) => theme.colors.header};
}
.brown {
  background-color: ${({ theme }) => theme.colors.header};
}
.pink {
  background-color: ${({ theme }) => theme.colors.header};
}
`;
