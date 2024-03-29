import React, { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import { createContext } from 'react';
import Order from './components/Dashboard/Order/Order';
import PrivateRoute from './components/Home/Login/PrivateRoute/PrivateRoute';
import Login from './components/Home/Login/Login';
import Review from './components/Dashboard/Review/Review';
import ServiceDetails from './components/Dashboard/ServiceDetails/ServiceDetails';
import AddService from './components/Dashboard/AddService/AddService';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import DeleteService from './components/Dashboard/DeleteService/DeleteService';
import Service from './components/Home/Service/Service';
import Header from './components/Home/Header/Header';
import Navbar from './components/Home/Navbar/Navbar';
import ServiceOrdered from './components/Dashboard/OrderedService/ServiceOrdered'
import { NavHashLink } from 'react-router-hash-link';
import { HashRouter } from 'react-router-dom/cjs/react-router-dom.min';
import CustomBooking from './components/Home/CustomBooking/CustomBooking';
import { FooterContainer } from './components/Home/Footer/Footer';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const[loader,setLoader] = useState(true)
  const [services, setServices] =  useState([])
  const[order,setOrder] =useState({});

    useEffect( () => {
        fetch('https://eco-clean.onrender.com/services')
        .then(res => res.json())
        .then(data =>(
            setServices(data),
            console.log("What Data I am getting: ",data),
            setLoader(false)
        )

    )}, [])

    // useEffect( () => {
    //   fetch('https://eco-clean.onrender.com/reviews')
    //   .then(res => res.json())
    //   .then(data =>(
    //       setLoader(false),
    //       setReviews(data)
    //   )


    //   )}, [])
    console.log("What service I am getting: ",services)

  return (
    <UserContext.Provider value={{ value:[loggedInUser,setLoggedInUser],value1:[loader,setLoader], value2:[services, setServices],value3:[order,setOrder]}}>
    <Router>
      <Switch>
      <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/servicedetails">
          <ServiceDetails></ServiceDetails>
        </Route>
        <Route path="/addservice">
          <AddService></AddService>
        </Route>
        <Route path ="/manage_service">
        <ServiceOrdered></ServiceOrdered>
        </Route>
        <Route path="/deleteService">
          <DeleteService></DeleteService>
        </Route>
        <Route path="/makeadmin">
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path="/review">
          <Review></Review>
        </Route>
        <PrivateRoute path="/dashboard">
        <Order></Order>
        </PrivateRoute>
        <PrivateRoute path="/order/:name">
          <Order></Order>
        </PrivateRoute>

      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
