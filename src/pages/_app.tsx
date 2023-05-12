import { ThemeProvider } from "styled-components";
import defaultTheme from "../styles/theme";
import {GlobalStyles} from "../styles/GlobalStyles";

function App({ Component, ...rest }: any) {

  return <>
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Component  />
    </ThemeProvider>
  </>
}

export default App;