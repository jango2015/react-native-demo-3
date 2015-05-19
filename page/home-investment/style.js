'use strict';

var
  React = require('react-native'),
  Dimensions = require('Dimensions');

var
  deviceWidth = Dimensions.get('window').width,
  deviceHeight = Dimensions.get('window').height;

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 65,
    backgroundColor: '#f0f2f5',
  },

  tabList: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: .5,
    borderColor: '#d1d1d1',
  },

  tabSlider: {
    flex: 1,
    flexDirection: 'row',
  },

  tabSliderWrap: {
    flex: 1,
    width: deviceWidth,
    height: deviceHeight - 40,
    paddingTop: 15,
    marginTop: -65,
  },

  listScroller: {
    flex: 1,
    // paddingTop: 10,
    // marginTop: -64,
    // width: deviceWidth,
  },

  tabListItem: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
  },

  tabListItemUnSelected: {},

  tabListItemSelected: {
    borderBottomWidth: 2,
    borderColor: '#fc6e51',
  },

  tabListItemUnSelectedText: {},

  tabListItemSelectedText: {
    color: '#fc6e51',
  },

  /* project item */
  projectItem: {
    borderTopWidth: .5,
    borderBottomWidth: .5,
    borderColor: '#d1d1d1',
    backgroundColor: '#fff',
    marginBottom: 10,
  },

  projectItemTit: {
    height: 40,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#e5e5e5',
    borderBottomWidth: .5,
  },

  projectItemTitStar: {
    width: 64,
    height: 10,
    marginLeft: 10,
  },

  projectItemTitStarCover: {
    position: 'relative',
    width: 0,
    height: 10,
    overflow: 'hidden',
  },

  projectItemTitStarProcess: {
    position: 'absolute',
    width: 64,
    height: 10,
    left: 0,
    top: 0,
  },

  projectItemCnt: {
    flexDirection: 'row',
    paddingTop: 18,
    paddingBottom: 18,
  },

  projectCntInfoArea: {
    marginTop: 8,
    flex: 1,
    flexDirection: 'row',
  },

  projectCntInfoItem: {
    flex: 1,
    paddingTop: 4,
    alignItems: 'center',
  },

  projectCntInfoItemIcon: {
    marginBottom: 8,
    width: 16,
    height: 16,
  },

  projectCntInfoItemData: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  projectCntInfoItemDataNum: {
    fontSize: 20,
    height: 20,
    fontWeight: '500',
    color: '#fc6e51',
  },

  projectCntInfoItemDataUnit: {
    fontSize: 12,
  },

  projectItemCntCircleArea: {
    width: 70,
    height: 70,
    marginLeft: 8,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  /* project item end */

});
