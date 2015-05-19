/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

require('./base');

var
  Navigator = require('./component/navigator'),

  HomeView = require('./page/home'),
  HomeLoanView = require('./page/home-loan'),
  HomeInvestmentView = require('./page/home-investment'),

  React = require('react-native');

var {
  AppRegistry,
} = React;

var p2p = React.createClass({
  render() {
    return (
      <Navigator
        initialRoute={{
          title: '街利贷',
          component: HomeView
        }} />
    );
  }
});

AppRegistry.registerComponent('p2p', () => p2p);
