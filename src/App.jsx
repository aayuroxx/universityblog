import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import BlogDetails from "./pages/BlogDeatils/BlogDetails";
import AddBlog from "./pages/AddBlog/AddBlog";
import EditBlog from "./pages/EditBlog/EditBlog";
import RootLayout from "./pages/RootLayout";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },

      { path: "/blog-details/:id", element: <BlogDetails /> },
      { path: "/add-blog", element: <AddBlog /> },
      { path: "/edit-blog/:id", element: <EditBlog /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
