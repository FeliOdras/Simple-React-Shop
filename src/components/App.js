import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Shop from './Shop';
import NotFound from './NotFound';
import Intro from './Intro';

class App extends Component {
  render() {
    return (
      <Fragment>
        <HashRouter hashType="noslash">
          <Switch>
            <Route exact path="/" component={Intro} />
            <Route path="/shop" component={Shop} />
            <Route component={NotFound} />
          </Switch>
        </HashRouter>
      </Fragment>
    );
  }
}

export default App;
