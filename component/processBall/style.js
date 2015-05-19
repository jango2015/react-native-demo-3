'use strict';

var
  React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({

  circle: {
    width: 250,
    height: 250,
    alignItems: 'center',
  },

  icon: {
    marginTop: 40,
    marginBottom: 16,
    width: 30,
    height: 30,
    backgroundColor: 'transparent',
  },

  commonFont: {
    color: '#fff',
    textAlign: 'center',
    containerBackgroundColor: 'transparent',
  },

  label: {
    fontSize: 16,
    marginBottom: 4,
  },

  bnum: {
    fontSize: 38,
    marginTop: 10,
    marginBottom: 10,
  },

  snum: {
    fontSize: 18,
  },

});
