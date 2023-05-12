import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string,
      secondary: string,
      terciary700: string,
      neutral: string,
      neutral1: string,
      neutral600: string,
      success: string,
      warning:  string,
      error:  string,
      white:  string,
      black:  string,
      gray900: string,
    };
  
  }
}