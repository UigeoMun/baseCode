// @flow

import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';

type Props = {
  // ...
};

class App extends Component<Props> {
  render() {
    return (
      <React.Fragment>
        <title> DeepDx-Connect </title>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
