import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import './style.css';
import {BrowserRouter,Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Welcome to react routing'
    };
  }

  render() {
    return (
      <BrowserRouter>
      <div>
        <Home/>
        <Switch>
        <Route path="/" exact component={Hello}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        </Switch>
       
     </div>
      </BrowserRouter>
       
    
    );
  }
}

render(<App />, document.getElementById('root'));
