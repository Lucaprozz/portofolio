import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './routes/Home'
import Projects from './routes/Projects'
import About from './routes/About'
class App extends Component {
  render() {
      return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/projects' component={Projects}></Route>
                <Route path='/about' component={About}></Route>
                <Redirect from='*' to='/' />
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
