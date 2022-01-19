import './App.css';
import React from "react";
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Home from './component/Home/Home/Home'
import Service from './component/Service/Services/Service';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Notfound from './component/Not Found/Notfound';
import Header from './component/Shared/Header/Header';
import Footer from './component/Shared/Footer/Footer';
import Login from './component/Privacy/Login/Login';
import Register from './component/Privacy/Register/Register';
import AuthProvider from './component/Contexts/AuthProvider';
import Treatment from './component/Service/Treatments/Treatment';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Service></Service>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute exact path="/treatment/:id">
              <Treatment></Treatment>
            </PrivateRoute>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
