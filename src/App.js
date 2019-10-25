import React, { Component } from "react";
import { Route,  Switch } from "react-router-dom";
import MainContainer from "./containers/MainContainer";
import UserMain from "./containers/UserMain";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route exact path="/spoon" component={MainContainer} />
          <Route exact path="/spoon/:id" component={UserMain} />
          <Route render={() => <h2>NOT FOUND</h2>} />
        </Switch>
      </div>
    );
  }
}

export default App;
