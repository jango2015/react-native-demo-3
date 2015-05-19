'use strict';

var
  React = require('react-native'),
  styles = require('./style');

var {
  View,
  Text,
} = React;

module.exports = React.createClass({
  
  render() {
    return (
      <View style={[{
        backgroundColor: this.props.bgcolor || '#fc6e51'
      }, styles.label]}>
        <Text style={[{
          color: this.props.color || '#fff'
        }, styles.labelText]}>
          {this.props.text}
        </Text>
      </View>
    );
  },

});
