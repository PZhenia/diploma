import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "./pages/home";
import About from "./pages/about";
import Help from "./pages/help";
import Hotels from "./pages/hotels/index.jsx";
import HotelDetails from "./pages/hotel-details/index.jsx";
import MyHotels from "./pages/my-hotels";
import SignIn from "./pages/sign-in/index.jsx";
import SignUp from "./pages/sign-up/index.jsx";

import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import { hotelsLoader, hotelLoader } from "./loaders/hotelsLoader.js";

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
        path: "sign-up",
        element: <SignUp />
      },
      {
        path: "sign-in",
        element: <SignIn />
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
        element: <Hotels />,
        loader: hotelsLoader,
      },
      {
        path: "hotel/:id",
        element: <HotelDetails />,
        loader: hotelLoader,
      },
      {
        path: "my-hotels",
        element: (
            <PrivateRoute>
              <MyHotels />
            </PrivateRoute>
        )
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
