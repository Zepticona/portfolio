import React from 'react' 
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import ContactForm from './Components/Common/ContactForm/ContactForm';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Resume from './Components/Resume/Resume';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/contact">
          <ContactForm></ContactForm>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/blogs">
          <Blogs></Blogs>
        </Route>
        <Route path="/Resume">
          <Resume></Resume>
        </Route>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="*">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
