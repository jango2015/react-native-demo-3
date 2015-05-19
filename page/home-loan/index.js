'use strict';

var
  Button = require('../../component/button'),
  Label = require('../../component/label'),
  ProcessBall = require('../../component/processBall'),

  Api = require('../../helper/api'),

  React = require('react-native'),
  styles = require('./style');

var {
  View,
  Text,
  Image,
  AlertIOS,
  ScrollView,
  TouchableWithoutFeedback,
} = React;

var LoanMethodItemView = React.createClass({

  _iconMatch(icon, disable) {
    switch(icon) {
      case 'database':
        return disable ? require('image!database') : require('image!databaseHover');
      case 'credit':
        return disable ? require('image!credit') : require('image!creditHover');
    }
  },
  
  render() {

    var icon = this._iconMatch(this.props.icon, this.props.disable);
    var checkIcon = this.props.selected ? require('image!checkHover') : require('image!check');

    return (
      <View style={styles.loanMethodItem}>
        <View style={styles.loanMethodItemLeft}>
          <Image style={styles.loanMethodItemIcon} source={icon} />
          <View style={styles.loanMethodItemCnt}>
            <Text style={styles.loanMethodItemCntLine1}>{this.props.desc}</Text>
            {
              this.props.disable
              ?
                <View style={styles.loanMethodItemCntLine2}>
                  <Label bgcolor="#d3d3d3" text="敬请期待" />
                </View>

              :
                <View style={styles.loanMethodItemCntLine2}>
                  <Text style={styles.loanMethodItemCntLine2Txt}>
                    {this.props.maxAmount}元
                  </Text>
                  <Label text="可借" />
                </View>
            }
          </View>
        </View>
        <Image style={styles.loanMethodItemChecker} source={checkIcon} />
      </View>
    );
  }

});

var LoanMethodListView = React.createClass({

  getInitialState() {
    return {
      'selectLoanType': 1,
    };
  },

  render() {
    return (
      <View style={[styles.loanMethodList, styles.mb20]}>
        {
          this.props.dataSource.map((rowData) => {
            return (
              <TouchableWithoutFeedback
                onPress={() => {
                  if (rowData.disable) return;
                  this.setState({
                    'selectLoanType': rowData.loanType
                  });
                }}>
                <View style={styles.loanMethodListChild}>
                  <LoanMethodItemView
                    disable={rowData.disable ? true : false}
                    maxAmount={rowData.maxAmount}
                    selected={this.state.selectLoanType === rowData.loanType}
                    icon={rowData.icon}
                    desc={rowData.desc} />
                </View>
              </TouchableWithoutFeedback>
            )
          })
        }
      </View>
    );
  }

});

var HomeLoanView = React.createClass({

  getInitialState() {
    return {
      'presentAmount': '-',
      'surplusAmount': '-',
      'process': 0,
      'methodData': [{
        'loanType': 1,
        'icon': 'database',
        'desc': '短期贷款（90天内）',
        'maxAmount': '-',
      }, {
        'loanType': 2,
        'icon': 'credit',
        'desc': '等额本息（180天）',
        'maxAmount': '-',
        'disable': true,
      }],
    };
  },

  componentDidMount() {
    this.fetchData();
  },

  fetchData() {
    // fetch(Api['home/loan'])
    //   .then((response) => response.json())
    //   .then((responseData) => {
    
        var responseData = {
          "status": {
            "code": 1001,
            "msg": "正常"
          },
          "result": {
            "isable2loan": true,
            "surplusAmount": 2231123,
            "presentAmount": 1231123,
            "amount": 10123123,
            "maxAmount": 12931923,
            "process": 35,
            "authStatus": {
              "mgjShopStatus": 1,
              "shopStatus": 0,
              "mobileStatus": 0,
              "trustStatus": 0
            }
          }
        };

        if (responseData.status.code === 1001) {
          var data = responseData.result;

          var
            methodData = this.state.methodData,
            process = data.process,
            presentAmount = (data.presentAmount / 100).toLocaleString(2) + '',
            surplusAmount = (data.surplusAmount / 100).toLocaleString(2) + '';

          methodData[0]['maxAmount'] = surplusAmount;
          methodData[1]['maxAmount'] = surplusAmount;

          this.setState({
            "methodData": methodData,
            "process": process,
            "presentAmount": presentAmount,
            "surplusAmount": surplusAmount
          });
        }
      // })
      // .done();
  },

  _next() {
    //TODO
  },

  render() {

    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroller}>

          <View style={[styles.bollWrap, styles.mb20]}>
            <ProcessBall style={styles.circle}
              process={this.state.process}
              presentAmount={this.state.presentAmount}
              surplusAmount={this.state.surplusAmount} />
          </View>

          <LoanMethodListView
            dataSource={this.state.methodData} />

          <Button style={[styles.mb20]} text="下一步" fn={this._next} />
        </ScrollView>
      </View>
    );
  }

});

module.exports = HomeLoanView;
