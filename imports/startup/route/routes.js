import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import AppContainer from '../../ui/containers/AppContainer.js';
import LoginPage from '../../ui/pages/LoginPage.js';
import SignupPage from '../../ui/pages/SignupPage.js';
import NotFoundPage from '../../ui/pages/NotFoundPage.js';
import ResetPasswordPage from '../../ui/pages/ResetPasswordPage.js';
import ForgotPasswordPage from '../../ui/pages/ForgotPasswordPage.js';
import ErrorPage from '../../ui/pages/ErrorPage.js';
import SuccessPage from '../../ui/pages/SuccessPage.js';
import DemoPage from '../../ui/pages/DemoPage.js';

import createBrowserHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import reducer from '../../reducers'
import homeRoutes from './homeRoutes'

const browserHistory = createBrowserHistory();
const store = createStore(reducer, applyMiddleware(routerMiddleware(browserHistory), thunk));

const hroutes = homeRoutes.map(d => {
  return (
    <Route key={d.tabpath} path={"/tab/" + d.tabname + "/" + d.tabpath} component={d.tabpage} />
  )
})

export const renderRoutes = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/error" component={ErrorPage} />
        <Route exact path="/success" component={SuccessPage} />
        <Route exact path="/forgot" component={ForgotPasswordPage} />
        <Route exact path="/demo" component={DemoPage} />
        <Route exact path='/reset2-password/:token' component={ResetPasswordPage} />
        <Route exact path="/" component={AppContainer} />
        <Route exact path="/tab/:tab" component={AppContainer} />
        {hroutes}
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </Provider>
);
