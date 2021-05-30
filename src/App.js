import {BrowserRouter, Route, Switch} from "react-router-dom";

// connecting the definitions of Home, About, etc. from their pages in components to use them in function below
import Home from "./components/Home";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
// calling the navbar below here and placing inside the function
import NavBar from "./components/NavBar";
import ProgressiveImage from "./components/ProgressiveImage";

function App() {
  return (
  <BrowserRouter>

        {/* <img src={image} alt="background" className="absolute w-full" /> */}

<ProgressiveImage 
  preview={`https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80`}
  image={`https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80`}
/>  <NavBar />
  {/* Switch will switch to allow the components to display for the user */}
    <Switch>
      {/* Need 5 routes because there will be 5 different pages | excluding navbar because it will always be visible*/}
      {/* path=/ === homepage  */}
      <Route component={Home} path='/' exact />
      <Route component={SinglePost} path='/post/:slug' />
      <Route component={Post} path='/post' />
      <Route component={Project} path='/project' />
    </Switch>
    
  </BrowserRouter>
  )
}

export default App;

