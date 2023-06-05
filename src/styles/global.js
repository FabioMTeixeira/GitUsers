import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    font-family: 'Inter', sans-serif;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    padding: 4px;
  }

  p {
    text-align: center;
  }

  a {
    text-decoration: none;
  }
`
