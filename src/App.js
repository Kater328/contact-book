import "./App.css";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/contacts" exact>
              <Contacts />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
