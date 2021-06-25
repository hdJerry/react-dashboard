import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Dashboard from './pages/dashboard';
import {
  useSelector
} from 'react-redux'


import Login from './pages/login';


import ErrorPage from './pages/ErrorPage'



 import PrivateRoute from './Components/PrivateRoute';
 import DashboardContainer from './Components/Dashboard';


 import routes from './data/routes';
 

function App() {
  let { token } = useSelector(state => state.user);

  const routesData = routes;
  
  return (
     
          <Switch>
                <Route exact path="/login">
                  <Login token={token} />
               </Route>

                <DashboardContainer>
                    {
                      routesData.map((res, index) => (
                        <PrivateRoute exact path={res.to} token={token} component={res.component} redirectTo='/login' key={index}/>
                      ))
                    }

                <PrivateRoute exact path='/' token={token} component={Dashboard} redirectTo='/login'/>
                </DashboardContainer>

            <Route component={ErrorPage} />

          </Switch>
  );
}

export default App;
