import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './routes/Home'
import Projects from './routes/Projects'
import About from './routes/About'
import Login from './routes/Login'
import Admin from './routes/Admin'

class App extends Component {
  render() {
      return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/Projects' component={Projects}></Route>
                <Route exact path='/About' component={About}></Route>
                <Route exact path='/Login' component={Login}></Route>
                <Route exact path='/Admin' component={Admin}></Route>
                <Redirect from='*' to='/' />
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
