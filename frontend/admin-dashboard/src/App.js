import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Dashboard from './components/AdminDashboard/Dashboard';
import Users from './components/AdminDashboard/Users';
import Bookings from './components/AdminDashboard/Booking';
import Vehicles from './components/AdminDashboard/Vehicles';
import { AuthProvider, useAuth } from './components/Auth';
import './App.css';

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Routes
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/login" component={Login} />
          <Fragment path="/admin" exact>
            <Dashboard />
          </Fragment>
          <Fragment path="/admin/users">
            <Users />
          </Fragment>
          <Fragment path="/admin/bookings">
            <Bookings />
          </Fragment>
          <Fragment path="/admin/vehicles">
            <Vehicles />
          </Fragment>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
