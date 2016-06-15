import React from 'react';
import {Route} from 'react-router';
import App from './containers/App/App';

export default () => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App} />
  );
};
