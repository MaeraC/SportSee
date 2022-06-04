import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import Dashboard from './pages/Dashboard'
import 'typeface-roboto' 

ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/dashboard/:id'>
            <Dashboard />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
