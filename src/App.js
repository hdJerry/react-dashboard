import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


import Dashboard from './pages/dashboard';

import SideMenuContainer from './Components/SideMenu';

import ErrorPage from './pages/ErrorPage'

import { 
  AppContainer, 
  MainContents, 
 } from './App.styles'

function App() {
  let token = 'thereisatokenherenow!!!!';
  
  return (
    <Router>

      <AppContainer>
        {
          token && (
            <SideMenuContainer />
          )
        }

        <MainContents>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/" component={Dashboard} />

            <Route path="/borrowers">
              <h3>Borrowers</h3>
            </Route>
            <Route component={ErrorPage} />

          </Switch>

        </MainContents>

      </AppContainer>
    
    </Router>
  );
}

export default App;
