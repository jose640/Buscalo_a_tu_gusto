import React from "react";
import { Provider } from "react-redux";
import generarStore from "./store";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { NavBar, Catalogo, SearchBar } from "./components";

function App() {
  const store = generarStore();

  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={SearchBar} />  
          <Route exact path="/catalogo" component={Catalogo} />        
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
