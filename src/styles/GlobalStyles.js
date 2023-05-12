import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    
  }

  body, html, #root {
    height: 100%;
    width: 100%;
  }

  #__next {
    height: 100%;
  }

  body {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.text};
    font-family: 'Poppins';
    transition: all 0.50s linear;
  }

  .pointer {
    cursor: pointer
  }

`