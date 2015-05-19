'use strict';

var
  React = require('react-native'),
  styles = require('./style');

var {
  View,
  Text,
  TouchableWithoutFeedback,
} = React;

module.exports = React.createClass({

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.fn}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{this.props.text}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

});
