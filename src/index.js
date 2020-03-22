import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import App from './app';
import Callback from './modules/callback';
import NotFound from './modules/notFound';

import './assets/css/index.css';
import './assets/css/colors.css';
import './assets/css/fonts.css';
import './assets/css/margins.css';

render((
  <BrowserRouter>
    <Switch>
      <Route exact path='/'>
        <App/>
      </Route>
      <Route path='/callback'>
        <Callback/>
      </Route>
      <Route path='*'>
        <NotFound/>
      </Route>
    </Switch>
  </BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();
