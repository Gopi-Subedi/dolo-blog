import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Create from "./components/Create";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlogDetails from "./components/BlogDetails";
// we are accessing BrowserRouter of react-router-dom as Router in this application
import NotFound from "./components/NotFound";


function App() {
  // const person= {name:"Ram", age: 50};
  // const num1=50;
  // const num2=5;
  // const link= "www.google.com";
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* NavBar must appear on all the routes thus is excluded from switch */}
        <div className="content">
          <Switch>
            {/* components inside switch only gets routed i.e only one route shows at a time  */}
            <Route exact path="/">
              {/* Since react matches the path with the url serially and routes immediately if the beginning character of path matches url without matching the rest
              To resolve this prblm we use exact prop in the route */}
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blog/:id"> 
            {/* here :id is used to pass the dynamic routing parameter */}
              <BlogDetails/>
            </Route>
            <Route path="*"> 
            {/* we use * to catch all other random urls and this route is always placed at last*/}
              <NotFound />
            </Route>
          </Switch>
          
          {/* <h1>App Component</h1>
          <p>{person.name}</p>
          <p>{num1>num2? "true" : "false"}</p>
          <p>{Math.random()*10}</p>
          <a href={link}>Google site</a> */}
          
        </div>
      </div>
    </Router>
  );
}

export default App;
