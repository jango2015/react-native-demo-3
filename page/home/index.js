'use strict';

var
  Fixbar = require('../../component/fixbar'),
  NoteView = require('../note'),
  HomeLoanView = require('../home-loan'),
  HomeInvestmentView = require('../home-investment'),

  Api = require('../../helper/api'),

  React = require('react-native'),
  styles = require('./style');

var {
  View,
  Text,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} = React;

var HomeView = React.createClass({

  getInitialState() {
    return {
      "banners": [{
        "src": "//placeholder.qiniudn.com/750x316/ccc/fff"
      }],
      "loanNum": '-',
      "loanAmount": '-'
    };
  },

  componentDidMount() {
    this.fetchData();
  },

  fetchData() {
    // fetch(Api['home/index'])
    //   .then((response) => response.json())
    //   .then((responseData) => {
    
        // mock
        var responseData = {
          "status": {
            "code": 1001,
            "msg": "正常"
          },
          "result": {
            "banners": [
              {
                "src": "//s7.mogujie.com/pic/150327/17y7fb_ieywmmtemftdomjtgazdambqmeyde_750x316.jpg",
                "link": "javascript:;"
              }
            ],
            "loanNum": 21212,
            "loanAmount": 1237100210,
            "isLoaner": true
          }
        };

        if (responseData.status.code === 1001) {
          var data = responseData.result;
          this.setState({
            "banners": data.banners,
            "loanNum": data.loanNum.toLocaleString(),
            "loanAmount": (data.loanAmount / 100 / 10000).toLocaleString(2) + '万',
          });
        }
      // })
      // .done();
  },

  _openNote() {
    this.props.navigator.push({
      title: '公告消息',
      backButtonTitle: '返回',
      component: NoteView,
    });
  },

  _openLoan() {
    this.props.navigator.push({
      title: '我要借款',
      backButtonTitle: '返回',
      component: HomeLoanView,
    });
  },

  _openInvestment() {
    this.props.navigator.push({
      title: '我要投资',
      backButtonTitle: '返回',
      component: HomeInvestmentView,
    });
  },

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroller}>
          
          <Image
            style={styles.banner}
            source={{uri: 'http:' + this.state.banners[0].src}} />

          <View style={styles.runninginfo}>
            <View style={[styles.runninginfoRow, styles.runninginfoRowBorder]}>
              <Text style={styles.runninginfoRowTit}>累计借款人次</Text>
              <Text style={styles.runninginfoRowNum}>{this.state.loanNum}</Text>
            </View>
            <View style={styles.runninginfoRow}>
              <Text style={styles.runninginfoRowTit}>累计借款金额</Text>
              <Text style={styles.runninginfoRowNum}>{this.state.loanAmount}</Text>
            </View>
          </View>

          <View style={styles.homeFnArea}>
            <TouchableWithoutFeedback onPress={this._openLoan}>
              <Image
                style={styles.homeFnAreaBtn}
                source={require('image!btnLoan')}>
                <Text style={styles.homeFnAreaBtnText}>我要借款</Text>
              </Image>
            </TouchableWithoutFeedback>
            <View style={styles.homeFnAreaFence}></View>
            <TouchableWithoutFeedback onPress={this._openInvestment}>
              <Image
                style={styles.homeFnAreaBtn}
                source={require('image!btnInvestment')}>
                <Text style={styles.homeFnAreaBtnText}>我要投资</Text>
              </Image>
            </TouchableWithoutFeedback>
          </View>

          <View style={styles.securityTip}>
            <Image
              style={styles.securityTipIcon}
              source={require('image!icon-info')} />
            <Text style={styles.securityTipText}>账户资金安全由平安银行监管</Text>
          </View>

          <TouchableWithoutFeedback onPress={this._openNote}>
            <View style={styles.noteItem}>
              <View style={styles.noteItemLeft}>
                <Image style={styles.noteIcon} source={require('image!icon-note')} />
                <Text style={styles.noteText}>公告消息</Text>
              </View>
              <Image style={styles.noteIcon} source={require('image!icon-arrow')} />
            </View>
          </TouchableWithoutFeedback>

        </ScrollView>
        <Fixbar current="home" />
      </View>
    );
  }

});

module.exports = HomeView;
