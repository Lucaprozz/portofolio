import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.scss';
import Home from './routes/Home'
import Projects from './routes/Projects'
import About from './routes/About'

class App extends Component {
  render() {
      return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/Projects' component={Projects}></Route>
                <Route exact path='/About' component={About}></Route>
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
