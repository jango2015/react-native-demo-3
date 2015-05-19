'use strict';

var
  Dispatcher = require('../../helper/dispatcher'),
  Api = require('../../helper/api'),
  Circle = require('../../component/circle'),

  React = require('react-native'),
  Dimensions = require('Dimensions'),
  styles = require('./style');

var
  deviceWidth = Dimensions.get('window').width,
  deviceHeight = Dimensions.get('window').height;

var {
  View,
  Text,
  Image,
  ListView,
  ScrollView,
  TouchableWithoutFeedback,
} = React;

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

var ProjectItem = React.createClass({
  
  render() {
    return (
      <View style={styles.projectItem}>
        <View style={styles.projectItemTit}>
          <Text>{this.props.title}</Text>
          <Image style={styles.projectItemTitStar} source={require('image!starBg')}>
            <View style={[
              styles.projectItemTitStarCover,
              {width: this.props.star / 100 * 64}
            ]}>
              <Image
                style={styles.projectItemTitStarProcess}
                source={require('image!starFt')} />
            </View>
          </Image>
        </View>
        <View style={styles.projectItemCnt}>
          <View style={styles.projectCntInfoArea}>
            <View style={styles.projectCntInfoItem}>
              <Image style={styles.projectCntInfoItemIcon} source={require('image!paragraph')} />
              <View style={styles.projectCntInfoItemData}>
                <Text style={styles.projectCntInfoItemDataNum}>
                  {this.props.rate}
                </Text>
                <Text style={styles.projectCntInfoItemDataUnit}>%</Text>
              </View>
            </View>
            <View style={styles.projectCntInfoItem}>
              <Image style={styles.projectCntInfoItemIcon} source={require('image!clock')} />
              <View style={styles.projectCntInfoItemData}>
                <Text style={styles.projectCntInfoItemDataNum}>
                  {this.props.span}
                </Text>
                <Text style={styles.projectCntInfoItemDataUnit}>天</Text>
              </View>
            </View>
            <View style={styles.projectCntInfoItem}>
              <Image style={styles.projectCntInfoItemIcon} source={require('image!tinyDatabase')} />
              <View style={styles.projectCntInfoItemData}>
                <Text style={styles.projectCntInfoItemDataNum}>
                  {(this.props.amount / 100).toLocaleString(2)}
                </Text>
                <Text style={styles.projectCntInfoItemDataUnit}>元</Text>
              </View>
            </View>
          </View>
          <View style={styles.projectItemCntCircleArea}>
            <Circle process={this.props.process} />
          </View>
        </View>
      </View>
    );
  }

});

var HomeInvestmentTab = React.createClass({

  render() {
    return (
      <View style={styles.tabList}>
        {
          this.props.tabListData.map((item, i) => {
            var isSelect = item.flag === this.props.tabCur;
            return (
              <TouchableWithoutFeedback
                key={item.flag}
                onPress={() => {
                  if (isSelect) return;
                  Dispatcher.dispatch({
                    actionType: 'HomeInvestmentTab:Change',
                    tabCur: item.flag
                  });
                }}>
                <View style={[styles.tabListItem, isSelect ? styles.tabListItemSelected : styles.tabListItemUnSelected]}>
                  <Text style={isSelect ? styles.tabListItemSelectedText : styles.tabListItemUnSelectedText}>{item.name}</Text>
                </View>
              </TouchableWithoutFeedback>
            );
          })
        }
      </View>
    );
  }

});

var HomeInvestmentSlider = React.createClass({

  _loadData(flag) {
    console.log(flag);
  },

  // _SliderScroll(event: Object) {
  //   console.log(event.nativeEvent.contentOffset);
  // },

  // _SliderScrollEnd() {
  //   console.log('---');
  // },

  render() {
    console.log({x: this.props.index * deviceWidth, y: 0});
    return (
      <ScrollView
        directionalLockEnabled={true}
        bounces={false}
        pagingEnabled={true}
        horizontal={true}
        scrollEventThrottle={100}
        // onScroll={this._SliderScroll}
        contentOffset={{x: this.props.index * deviceWidth, y: 0}}
        showsHorizontalScrollIndicator={false}
        automaticallyAdjustContentInsets={false}
        style={styles.tabSlider}>
        {
          this.props.dataSource.map(item => {
            return (
              <View key={item.flag} style={styles.tabSliderWrap}>
                <ListView
                  style={styles.listScroller}
                  dataSource={ds.cloneWithRows(item.data)}
                  renderRow={
                    (rowData) => <ProjectItem
                      star={rowData.star}
                      span={rowData.span}
                      rate={rowData.rate}
                      amount={rowData.amount}
                      process={rowData.process}
                      title={rowData.title} />
                  } />
              </View>
            );
          })
        }
      </ScrollView>
    );
  }

});

var HomeInvestmentView = React.createClass({

  getInitialState() {

    return {
      'horizontalPage': 0,
      'tabCur': 'all',
      'tabListData': [{
        'name': '全部项目',
        'flag': 'all'
      }, {
        'name': '30天(8%)',
        'flag': '30'
      }, {
        'name': '60天(9%)',
        'flag': '60'
      }, {
        'name': '90天(10%)',
        'flag': '90'
      }],
      'dataSource': [{
        'flag': 'all',
        'data': []
      }, {
        'flag': '30',
        'data': []
      }, {
        'flag': '60',
        'data': []
      }, {
        'flag': '90',
        'data': []
      }],
    };
  },

  componentDidMount() {
    this._register();
    this.state.tabListData.map(item => {
      this.fetchData(item.flag);
    });
  },

  _register() {
    Dispatcher.register((load) => {
      if (load.actionType === 'HomeInvestmentTab:Change') {
        var {index} = this._getDataByFlagName(load.tabCur, this.state.dataSource)
        this.setState({
          horizontalPage: index,
          tabCur: load.tabCur
        });
      }
    });
  },

  _getDataByFlagName(flag, dataSource) {
    for (var i = 0, len = dataSource.length; i < len; i++) {
      if (dataSource[i]['flag'] === flag) 
        return {index: i, recommendItem: dataSource[i]['data']};
    }
    return {index: i, recommendItem: []};
  },

  fetchData(flag) {
    // fetch(Api['home/investment'])
    //   .then((response) => response.json())
    //   .then((responseData) => {
    
        // mock
        var responseData = {
          "status": {
            "code": 1001,
            "msg": "正常"
          },
          "result": {
            "recommendItem": [
              {
                "title": "呵哈哈哈项目",
                "amount": 123123,
                "span": 3,
                "itemId": "xxxa1",
                "rate": "12.21",
                "process": 0,
                "star": 80,
                "inveNum": 1001,
                "status": 0
              },
              {
                "title": "呵呵哈哈项目",
                "amount": 12123,
                "span": 20,
                "itemId": "1xaa1",
                "rate": "42.21",
                "process": 20,
                "star": 60,
                "inveNum": 1301,
                "status": 0
              },
              {
                "title": "呵呵哈哈项目",
                "amount": 12123,
                "span": 20,
                "itemId": "1xaa1",
                "rate": "42.21",
                "process": 40,
                "star": 60,
                "inveNum": 1301,
                "status": 0
              },
              {
                "title": "呵呵呵哈项目",
                "amount": 12123,
                "span": 20,
                "itemId": "1xaa1",
                "rate": "42.21",
                "process": 50,
                "star": 60,
                "inveNum": 1301,
                "status": 0
              },
              {
                "title": "呵呵呵哈项目",
                "amount": 12123,
                "span": 20,
                "itemId": "1xaa1",
                "rate": "42.21",
                "process": 70,
                "star": 60,
                "inveNum": 1301,
                "status": 0
              },
              {
                "title": "1呵哈哈项目",
                "amount": 12123,
                "span": 20,
                "itemId": "1xaa1",
                "rate": "42.21",
                "process": 85,
                "star": 60,
                "inveNum": 1301,
                "status": 0
              },
              {
                "title": "1呵哈哈项目",
                "amount": 12123,
                "span": 20,
                "itemId": "1xaa1",
                "rate": "42.21",
                "process": 100,
                "star": 60,
                "inveNum": 1301,
                "status": 0
              },
              {
                "title": "1呵哈哈项目",
                "amount": 12123,
                "span": 20,
                "itemId": "1xaa1",
                "rate": "42.21",
                "process": 100,
                "star": 60,
                "inveNum": 1301,
                "status": 1
              },
              {
                "title": "1呵哈哈项目",
                "amount": 12123,
                "span": 20,
                "itemId": "1xaa1",
                "rate": "42.21",
                "process": 100,
                "star": 60,
                "inveNum": 1301,
                "status": 2
              },
              {
                "title": "1呵哈哈项目",
                "amount": 12123,
                "span": 20,
                "itemId": "1xaa1",
                "rate": "42.21",
                "process": 100,
                "star": 60,
                "inveNum": 1301,
                "status": 3
              }
            ]
          }
        };

        if (responseData.status.code === 1001) {
          var data = responseData.result;
          var dataSource = this.state.dataSource;

          var {index, recommendItem} = this._getDataByFlagName(flag, dataSource);
          dataSource[index]['data'] = recommendItem.concat(data.recommendItem);

          this.setState({
            dataSource: dataSource
          });
        }
      // })
      // .done();
  },

  render() {
    return (
      <View style={styles.container}>
        <HomeInvestmentTab
          tabCur={this.state.tabCur}
          tabListData={this.state.tabListData} />
        <HomeInvestmentSlider
          index={this.state.horizontalPage}
          dataSource={this.state.dataSource} />
      </View>
    );
  }

});

module.exports = HomeInvestmentView;
