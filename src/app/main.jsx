import React, { Component } from 'react';
import './styles.scss';
import history from 'route';
import { Router, Route, Switch } from 'react-router-dom';
import Provider from 'store/provider';
import Test1 from 'components/Test1';
import Test2 from 'components/Test2';
export default class App extends Component {
  render() {
    return (
      <Provider>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Test1} />
            <Route exact path="/projects" component={Test2} />
            <Route />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
