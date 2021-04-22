import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";



function App() {
  return (
  <BrowserRouter>
  {/* Switch will switch to allow the components to display for the user */}
    <Switch>
      {/* Need 5 routes because there will be 5 different pages | excluding navbar because it will always be visible*/}
      {/* path=/ === homepage  */}
      <Route component={Home} path='/' exact/>
      <Route component={About} path='/about'/>
      <Route component={SinglePost} path='/post/:slug'/>
      <Route component={Post} path='/post'/>
      <Route component={Project} path='/project'/>
    </Switch>
  </BrowserRouter>
  )
}

export default App;
