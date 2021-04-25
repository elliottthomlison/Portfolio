import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

// connecting the definitions of Home, About, etc. from their pages in components to use them in function below
import Home from "./components/Home";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import ProjectCards from "./components/ProjectCards.js";

// calling the navbar below here and placing inside the function
import NavBar from "./components/NavBar";
import Loading from './components/Loading.js'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Loading />
  {/* Switch will switch to allow the components to display for the user */}
    <Switch>
      {/* Need 5 routes because there will be 5 different pages | excluding navbar because it will always be visible*/}
      {/* path=/ === homepage  */}
      <Route component={Home} path='/' exact />
      <Route component={SinglePost} path='/post/:slug' />
      <Route component={Post} path='/post' />
      <Route component={ProjectCards} path='/project' />
    </Switch>
  </BrowserRouter>
  )
}

export default App;

