import React from 'react';
import "./App.css";
import ShopCart from './Pages/ShopCart/shopCart';
import { BrowserRouter as BrowserRouter, Routes, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home/home';
import Contacts from './Pages/Contacts/contacts';
import About from "../src/Pages/AboutUs/about";
import store from './components/redux/reducers/redux-store';
import {Provider} from "react-redux";
import LoginForm from './Pages/Login/login';
import NotFound from './Pages/NotFound/NotFound';


function App() {

  return (
  <Provider store={store}>
      <BrowserRouter>
       <Switch>
          <Route path='/cart' component={ShopCart} />
          <Route path='/home' component={Home} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/about' component={About} />
          <Route path = '/Login' component ={LoginForm} />
          {/* <Route path={'*'}>
               <NotFound/>
          </Route> */}
          <Route path='/' component={Home} />
       </Switch>
    
      </BrowserRouter>
  </Provider>
  );
}

export default App;
