
import { Route,Switch, BrowserRouter } from 'react-router-dom';
import {LoginPage,RegisterPage,LandingPage} from './pages/public';
import { HomePage,ProfilePage,SearchPage } from './pages/AppPages'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={LandingPage} path="/" exact/>
        <Route component={LoginPage} path="/auth/login" exact/>
        <Route component={RegisterPage} path="/auth/register" exact/>
        
        <Route component={HomePage} path="/home" />
        <Route component={ProfilePage} path="/profile" />
        <Route component={SearchPage} path="/search" />
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
