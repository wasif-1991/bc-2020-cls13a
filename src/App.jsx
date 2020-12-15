import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Services from './Services';
import Projects from './Projects';
import Footer from'./Footer';

function App() {
  return (
    <>
      <NavBar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/my-services" component={Services} />
        <Route exact path="/my-projects" component={Projects} />
        <Redirect to="/" />
      </Switch>

     <Footer />
    </>
  );
}

export default App;
