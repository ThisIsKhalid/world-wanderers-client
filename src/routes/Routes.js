import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import PlaceBooking from "../pages/PlaceBooking/PlaceBooking";
import Places from "../pages/Places/Places";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/places",
        element: <Places></Places>,
        loader: () => fetch("http://localhost:5000/places"),
      },
      {
        path: "/place/:id",
        element: <PlaceBooking></PlaceBooking>,
        loader: ({params}) => fetch(`http://localhost:5000/place/${params.id}`),
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ],
  },
]);