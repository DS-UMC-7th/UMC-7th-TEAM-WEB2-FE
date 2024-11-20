import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/HomePage/HomePage.jsx"
import DetailPage from "./pages/DetailPage/DetailPage.jsx";
import ListPage from "./pages/ListPage/ListPage.jsx"
import PostPage from "./pages/PostPage/PostPage.jsx"

// 라우터 설정
const router = createBrowserRouter([
  {
    path: "/", // 기본 경로
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
  return <RouterProvider router={router} />;
}

export default App;
