import React, { lazy, Suspense} from 'react';
import { BrowserRouter, Link, NavLink, Route, Switch} from 'react-router-dom';
import Header from '../components/SubComponents/Header';
import Footer from '../components/SubComponents/Footer';

import Dashboard from '../components/Dashboard';

import Loader from '../components/SubComponents/Loader';

// the router handles client side rendering of routes
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Suspense fallback={<Loader/>}>
        <Route path='/' component={Dashboard} exact={true}/>
        <Switch>
          {/* <Route path='/Main/' component={MetaDataTaggingApp} exact={true}/> */}
        </Switch>
      </Suspense>
      <Route children={Footer}/>
    </div>
  </BrowserRouter>
);

export default AppRouter;
