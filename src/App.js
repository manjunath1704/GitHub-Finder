import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import About from "./Pages/About";
import Home from "./Pages/Home";
import UserDetail from "./components/UserDetail";

function App() {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  // individual user data
  const getDetails = async (login) => {
    const res = await axios.get(`https://api.github.com/users/${login}`)
    setUser(res.data)
  }

  const getRepo = async (username) => {
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=25&sort=asc`)
    setRepos(res.data)
  }
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/user/:anything" render={
            props => (
              <UserDetail getDetails={getDetails} user={user} {...props} getRepo={getRepo} repos={repos} />
            )
          } />
        </Switch>
      </Router>
    </>
  );
}
export default App;
