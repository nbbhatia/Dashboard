import "react-perfect-scrollbar/dist/css/styles.css";
import React from "react";
import { ThemeProvider } from "@material-ui/core";
import GlobalStyles from "src/components/GlobalStyles";
import "src/mixins/chartjs";
import theme from "src/theme";
import Routing from "src/routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routing />
    </ThemeProvider>
  );
};

export default App;
