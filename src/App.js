import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

// pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Navbar from './components/Navbar';


function App() {
  const { authIsReady, user } = useAuthContext()
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route exact path="/">
              {!user && <Redirect to="/login"/>}
              {user && <Home/>}
            </Route>
            <Route path="/signup">
              {user && <Redirect to="/"/>}
              {!user && <Signup/>}
            </Route>
            <Route path='/login'>
              {user && <Redirect to="/"/>}
              {!user && <Login/>}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
