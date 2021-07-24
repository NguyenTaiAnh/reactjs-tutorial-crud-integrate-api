import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "./pages/create";
import Home from "./pages/index";
import UpdateProduct from "./pages/update";
function App() {
  return (
    <Router>
        <div style={{padding:10}}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/update/:id">
              <UpdateProduct  />
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
