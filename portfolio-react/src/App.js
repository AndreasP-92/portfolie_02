import "./main.scss";
import Index from './components/Index';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Project from './components/Project';
import NavbarComp from './components/Navbar';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    // <div>
    //   <Project/>
    // </div>
      <Router>
      <NavbarComp/>



      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" component={Index} exact={true}>
          <Index />
        </Route>
        <Route path="/Project" component={Project} exact={true}>
          <Project />
        </Route>
        <Route path="/Blog" component={Blog} exact={true}>
          <Blog />
        </Route>
      </Switch>

  </Router>
  );
}

export default App;

// {/* <Router>
// <Navbar/>
//   {/* A <Switch> looks through its children <Route>s and
//       renders the first one that matches the current URL. */}
//   <Switch>
//     <Route path="/" component={Index}>
//       <Index />
//     </Route>
//     <Route path="/project" component={Project}>
//       <Project/>
//     </Route>
//     <Route path="/blog" component={Blog}>
//       <Blog />
//     </Route>
//     <Route path="/contact" component={Contact}>
//       <Contact />
//     </Route>
//   </Switch>
// </Router> */}