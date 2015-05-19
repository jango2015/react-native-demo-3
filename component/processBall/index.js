// JavaScript

var
  React = require('react-native'),
  styles = require('./style');

var {
  Text,
  Image,
  requireNativeComponent
} = React;

var CircleView = requireNativeComponent('RCTCircleView', null);

module.exports = React.createClass({

  render() {
    return (
      <CircleView style={styles.circle} process={this.props.process}>
        <Image style={styles.icon} source={require('image!tinyDatabaseWhite')} />
        <Text style={[styles.commonFont, styles.label]}>当前借款金额(元)</Text>
        <Text style={[styles.commonFont, styles.bnum]}>{this.props.presentAmount}</Text>
        <Text style={[styles.commonFont, styles.label]}>剩余可借金额(元)</Text>
        <Text style={[styles.commonFont, styles.snum]}>{this.props.surplusAmount}</Text>
      </CircleView>
    );
  }

});
