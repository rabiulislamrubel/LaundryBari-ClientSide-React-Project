import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddService from './components/Dashboard/Admin/AddService';
import MakeAdmin from './components/Dashboard/Admin/MakeAdmin';
import ManageServices from './components/Dashboard/Admin/ManageServices';
import OrderList from './components/Dashboard/Admin/OrderList';
import Book from './components/Dashboard/Client/Book';
import BookingList from './components/Dashboard/Client/BookingList';
import Reviews from './components/Dashboard/Client/Reviews';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboard />
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/orderList'>
            <OrderList />
          </Route>
          <Route path='/addService'>
            <AddService />
          </Route>
          <Route path='/makeAdmin'>
            <MakeAdmin />
          </Route>
          <Route path='/manageService'>
            <ManageServices />
          </Route>
          <PrivateRoute path='/book/:pdId'>
            <Book />
          </PrivateRoute>
          <Route path='/showBook'>
            <Book />
          </Route>
          <Route path='/bookingList'>
            <BookingList />
          </Route>
          <Route path='/reviews'>
            <Reviews />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
