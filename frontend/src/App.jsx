import { createBrowserRouter, RouterProvider } from "react-router";

import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <div>HOME PAGE</div>
      }
    ]
  }
]);

function App() {
  return (<RouterProvider router={router} />)
}

export default App
