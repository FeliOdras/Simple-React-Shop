import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import Shop from './Shop';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <Fragment>
        <HashRouter hashType="noslash">
          <Switch>
            <Route exact path="/" render={() =>
              <div className="container text-center">
                <h1>Simple React Shop</h1>

                <Link to="/shop">
                  <i className="fas fa-shopping-cart fa-10x"></i>
                </Link>
                <h3>Built with</h3>
                <div className="text-left box">

                  <ul>
                    <li key="1">React</li>
                    <li key="2">React Router</li>
                    <li key="3">Bootstrap</li>
                    <li key="4">FontAwesome</li>
                  </ul>
                </div>

              </div>
            } />
            <Route path="/shop" component={Shop} />
            <Route component={NotFound} />
          </Switch>
        </HashRouter>
      </Fragment>
    );
  }
}

export default App;
