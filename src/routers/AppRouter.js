import React, { lazy, Suspense} from 'react';
import { BrowserRouter, Link, NavLink, Route, Switch} from 'react-router-dom';
import AboutMe from '../components/AboutMe/AboutMe';
import Contact from '../components/Contact/Contact';
import Dashboard from '../components/Dashboard/Dashboard';
import Header from '../components/SubComponents/Header/Header';
import Footer from '../components/SubComponents/Footer/Footer';
import Portfolio from '../components/Portfolio/Portfolio';

// the router handles client side rendering of routes
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Dashboard/>
        <Switch>
          <Route path='/' component={AboutMe} exact={true}/>
          <Route path='/Contact' component={Contact} exact={true}/>
          <Route path='/Portfolio' component={Portfolio} exact={true}/>
        </Switch>
      <Route children={Footer}/>
    </div>
  </BrowserRouter>
);

export default AppRouter;
