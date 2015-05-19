'use strict';

var
  React = require('react-native');

var {
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

  mb20: {
    marginBottom: 20,
  },

  bollWrap: {
    paddingTop: 20,
    paddingBottom: 20,
    height: 250 + 40,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  /* LoanMethodItemView */
  loanMethodList: {
    marginTop: 0,
    paddingTop: 0,
    borderTopWidth: .5,
    borderColor: '#d1d1d1',
    height: 136,
  },

  loanMethodListChild: {
    borderBottomWidth: .5,
    borderColor: '#d1d1d1',
  },

  loanMethodItem: {
    paddingTop: 14,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 14,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  loanMethodItemLeft: {
    flex: 1,
    flexDirection: 'row',
  },

  loanMethodItemIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },

  loanMethodItemCnt: {
    flex: 1,
  },

  loanMethodItemCntLine1: {
    height: 20,
    color: '#666',
  },

  loanMethodItemCntLine2: {
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  loanMethodItemCntLine2Txt: {
    color: '#fc6e51',
    marginRight: 4,
  },

  loanMethodItemChecker: {
    width: 27,
    height: 27,
  },
  /* LoanMethodItemView end */

});
