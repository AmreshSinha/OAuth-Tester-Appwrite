import { BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Landing from "./pages/Landing/Landing";
import { useGetUser } from "./hooks";

function App() {
  const [{ user }, dispatch] = useGetUser();

return(
  <BrowserRouter>
    <Switch>
      <Route path="/profile">
        {user ? <Profile user={user} dispatch={dispatch} /> : <Redirect to="/login" />}
      </Route>
      <Route path="/login">
        {user ? <Redirect to="/profile" /> : <Login dispatch={dispatch}/>}
      </Route>
      <Route exact path="/">
        <Landing />
      </Route>
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
)

}

export default App;