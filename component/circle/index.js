// JavaScript

var
  React = require('react-native'),
  styles = require('./style');

var {
  Text,
  requireNativeComponent
} = React;

var ArcView = requireNativeComponent('RCTArcView', null);

module.exports = React.createClass({

  render() {
    return (
      <ArcView style={styles.circle}
        arcWidth={5}
        process={this.props.process / 100}>
        <Text style={styles.projectItemCntCircleAreaText}>
          {this.props.process}%
        </Text>
      </ArcView>
    );
  }

});
