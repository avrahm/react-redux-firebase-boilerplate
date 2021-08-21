import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';

import { persistUserFromFirebase } from './firebase/functions/persistUser';

import './App.css';
import NavbarComponent from './Components/Navbar/Navbar';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import Dashboard from './Pages/Dashboard';
import PrivateRoute from './PrivateRoute';

function App() {

  const dispatch = useDispatch();
  ;
  useEffect(() => {
    dispatch(persistUserFromFirebase());
  }, [dispatch]);

  return (
    <div className="App">
      <NavbarComponent />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
