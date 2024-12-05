import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle.js";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.js";
import pageRoutes from "./routes/pagesRoutes.jsx";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <RouterProvider router={pageRoutes} />
    </ThemeProvider>
  );
}

export default App;
