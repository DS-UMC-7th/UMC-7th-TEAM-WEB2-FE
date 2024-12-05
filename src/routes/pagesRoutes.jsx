import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import React from "react";

// 동적 import
const HomePage = React.lazy(() => import("../pages/HomePage/HomePage.jsx"));
const ListPage = React.lazy(() => import("../pages/ListPage/ListPage.jsx"));
const PostPage = React.lazy(() => import("../pages/PostPage/PostPage.jsx"));
const DetailPage = React.lazy(() => import("../pages/DetailPage/DetailPage.jsx"));
const Search = React.lazy(() => import("../pages/Search/Search.jsx"));

const pageRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "list", element: <ListPage /> },
      { path: "post", element: <PostPage /> },
      { path: "detail/:id", element: <DetailPage /> },
      { path: "search", element: <Search /> },
    ],
  },
]);


export default pageRoutes;
