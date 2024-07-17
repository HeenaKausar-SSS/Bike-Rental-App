import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import BookingPage from "./pages/BookingPage";
import ProfilePage from './pages/ProfilePage';
import AllVehiclesPage from './pages/AllVehiclesPage';
import UserBookingPage from './pages/UserBookingPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Home/>},
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "book", element: <BookingPage /> },
      { path: "userprofile/:id", element: <ProfilePage /> },
      { path: "vehicle", element: <AllVehiclesPage /> },
      { path: "showuserbooking", element: <UserBookingPage /> },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

