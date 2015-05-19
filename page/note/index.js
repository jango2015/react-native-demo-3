'use strict';

var

  React = require('react-native'),
  styles = require('./style');

var DEFAULT_URL = 'https://f.mogujie.com/p2p/my/notice/737?_hideheader=true';

var {
  WebView,
} = React;

var NoteView = React.createClass({

  getInitialState() {
    return {
      url: DEFAULT_URL,
    };
  },

  render() {
    return(
      <WebView
        url={this.state.url} />
    );
  }

});

module.exports = NoteView;
