import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/HomePage/HomePage.jsx";
import DetailPage from "./pages/DetailPage/DetailPage.jsx";
import ListPage from "./pages/ListPage/ListPage.jsx";
import PostPage from "./pages/PostPage/PostPage.jsx";
import GlobalStyle from './styles/GlobalStyle.js'; 
import { ThemeProvider } from 'styled-components'; 
import theme from './styles/theme.js'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/list",
    element: <ListPage />,
  },
  {
    path: "/post",
    element: <PostPage />,
  },
  {
    path: "/detail",
    element: <DetailPage />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
