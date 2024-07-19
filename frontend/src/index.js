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

import AdminLayout from "./components/AdminDashboard/AdminLayout"
import Homepage from './pages/AdminDashboard/Homepage';
import UserMng from './pages/AdminDashboard/UserMng';
import BookingMng from './pages/AdminDashboard/BookingMng';
import VehicleMng from './pages/AdminDashboard/VehicleMng';
import InventoryMng from './pages/AdminDashboard/InventoryMng';
import AdminRegister from './pages/AdminDashboard/AdminRegister';
import AdminLogin from './pages/AdminDashboard/AdminLogin';

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
  },
  {
    path: "/admin",
    element: <AdminLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Homepage/>},
      { path: "admin-register", element: <AdminRegister /> },
      { path: "admin-login", element: <AdminLogin /> },
      { path: "manage-user", element: <UserMng /> },
      { path: "manage-booking", element: <BookingMng /> },
      { path: "manage-vehicle", element: <VehicleMng /> },
      { path: "manage-inventory", element: <InventoryMng /> }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

