import React from "react";
import { BrowserRouter, Route, Router, Switch, Link } from "react-router-dom";

import HomePage from "./components/Home/Home";
import ItemList from "./components/ItemList/ItemList";
import MyListings from "./components/MyListings/MyListings";
import "./App.css";

// this component should be a root router file
function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* add your router here like this. */}
        <Route exact path="/" component={HomePage} />
        <Route path="/items" component={ItemList} />
        <Route path="/my-listings" component={MyListings} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
