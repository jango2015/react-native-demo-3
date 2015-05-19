'use strict';

var
  React = require('react-native'),
  styles = require('./style');

var {
  View,
  Text,
  Image,
} = React;

module.exports = React.createClass({

  _renderItem(title, icon, isSelected) {
    return (
      <View style={styles.item}>
        <Image style={styles.icon} source={icon} />
        <Text style={isSelected ? styles.selectedText : styles.normalText}>{title}</Text>
      </View>
    );
  },

  render() {
    var
      iconHome = this.props.current === 'home' ?
        require('image!homeHover') :
        require('image!home'),
    
      iconMine = this.props.current === 'mine' ?
        require('image!mineHover') :
        require('image!mine'),

      iconMore = this.props.current === 'more' ?
        require('image!moreHover') :
        require('image!more');

    return (
      <View style={styles.bar}>
        {this._renderItem('首页', iconHome, this.props.current === 'home')}
        {this._renderItem('我的', iconMine, this.props.current === 'mine')}
        {this._renderItem('更多', iconMore, this.props.current === 'more')}
      </View>
    );
  }

});
