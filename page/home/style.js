'use strict';

var
  React = require('react-native'),
  Dimensions = require('Dimensions');

var deviceWidth = Dimensions.get('window').width;

var {
  Image,
  StyleSheet,
} = React;

module.exports = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },

  scroller: {
    flex: 1,
  },

  banner: {
    height: 316 / 750 * deviceWidth,
  },

  runninginfo: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: .5,
    borderColor: '#d1d1d1',
    backgroundColor: '#fff',
  },

  runninginfoRow: {
    flex: 1,
  },

  runninginfoRowBorder: {
    borderRightWidth: .5,
    borderColor: '#d1d1d1',
  },

  runninginfoRowTit: {
    fontSize: 12,
    color: '#666',
    paddingBottom: 4,
    textAlign: 'center',
  },

  runninginfoRowNum: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },

  homeFnArea: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
  },

  homeFnAreaFence: {
    width: 10,
  },

  homeFnAreaBtn: {
    flex: 1,
    resizeMode: Image.resizeMode.stretch,
    height: (deviceWidth - 10 * 2) / 2 - 5,
    paddingTop: (deviceWidth - 10 * 2 - 10) / 2 * 0.78,
  },

  homeFnAreaBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
    containerBackgroundColor: 'transparent',
  },

  securityTip: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  securityTipIcon: {
    width: 18,
    height: 18,
    marginRight: 10,
  },

  securityTipText: {
    fontSize: 12,
    color: '#b3b3b3',
  },

  noteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: .5,
    borderBottomWidth: .5,
    borderColor: '#d1d1d1',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 14,
    paddingRight: 14,
    marginTop: 10,
    marginBottom: 20,
  },

  noteItemLeft: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },

  noteIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },

  noteText: {
    color: '#393f48',
  },

});
