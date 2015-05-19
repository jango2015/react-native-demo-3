'use strict';

var
  React = require('react-native'),
  styles = require('./style');

var {
  NavigatorIOS,
} = React;

module.exports = React.createClass({

  render() {
    return (
      <NavigatorIOS
        style={styles.header}
        initialRoute={this.props.initialRoute} />
    );
  }

});
