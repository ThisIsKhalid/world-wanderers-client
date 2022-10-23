import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Hotels from "../pages/Hotels/Hotels";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import PlaceBooking from "../pages/PlaceBooking/PlaceBooking";
import Places from "../pages/Places/Places";
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <PlaceBooking></PlaceBooking>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/place/${params.id}`),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/hotels",
        element: <Hotels></Hotels>,
        loader: () => fetch("http://localhost:5000/hotels"),
      },
    ],
  },
]);