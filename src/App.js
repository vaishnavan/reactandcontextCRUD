import React from "react";
import DataProvider from "./context";
import UserDetail from "./UserDetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import DisplayUser from "./DisplayUser";
import UserUpdate from "./UserUpdate";

export default function App() {
  return (
    <>
      <DataProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={DisplayUser} />
            <Route exact path="/createUser" component={UserDetail} />
            <Route exact path="/edit/:id" component={UserUpdate} />
          </Switch>
        </Router>
      </DataProvider>
    </>
  );
}
