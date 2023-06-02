import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    font-family: 'Inter', sans-serif;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    padding: 2rem;
  }

  p {
    text-align: center;
  }

  a {
    text-decoration: none;
  }
`
