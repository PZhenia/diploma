import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "./pages/home";
import About from "./pages/about";
import Help from "./pages/help";
import Hotels from "./pages/hotels/index.jsx";

import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "help",
        element: <Help />
      },
      {
        path: "hotels",
        element: <Hotels />
      },
      {
        path: "*",
        element: <Home />
      }
    ]
  }
]);

function App() {
  return (<RouterProvider router={router} />)
}

export default App
