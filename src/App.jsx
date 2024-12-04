import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/HomePage/HomePage.jsx";
import DetailPage from "./pages/DetailPage/DetailPage.jsx";
import ListPage from "./pages/ListPage/ListPage.jsx";
import PostPage from "./pages/PostPage/PostPage.jsx";
import GlobalStyle from "./styles/GlobalStyle.js";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.js";
import "./App.css";
import RootLayout from "./components/layout/RootLayout.jsx";
import Search from "./pages/Search/Search.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      { path: "list", element: <ListPage /> },
      { path: "post", element: <PostPage /> },
      { path: "detail/:id", element: <DetailPage /> },
      { path: "search", element: <Search /> },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
