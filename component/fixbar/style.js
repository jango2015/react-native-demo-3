'use strict';

var
  React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({

  bar: {
    height: 48,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#ececec',
    backgroundColor: '#f6f8fa',
  },

  item: {
    flex: 1,
    alignItems: 'center',
  },

  normalText: {
    color: '#b6bbc2',
    fontSize: 12,
  },

  selectedText: {
    color: '#393f48',
    fontSize: 12,
  },

  icon: {
    width: 26,
    height: 26,
    marginTop: 3,
  },

});
