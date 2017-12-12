/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import RootNativator from './Novel/novelJs/RootNativator'
import {
  Text,
  Image,
  StyleSheet,
  StatusBar,
  View
} from 'react-native';
import AppUtils from './Novel/novelJs/Utils/AppUtils'
import ScrollDemo from './demes/ScrollDemo/ScrollDemo'
import RouteDemo from './demes/RouteDemo'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isToMainPage: false }
  }

  componentDidMount() {
    this.timer = setTimeout(
      () => { this.setState({ isToMainPage: true }); },
      3000
    );
  }

  componentWillUnmount() {
    // 如果存在this.timer，则使用clearTimeout清空。  
    // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear  
    this.timer && clearTimeout(this.timer);
  }

  render() {
    return (
      this.state.isToMainPage ? <RootNativator></RootNativator> : <Image resizeMode='stretch' style={styles.openImageStyle} source={require('./Novel/novelResource/loading_page.png')}></Image>


      //<EventDemo></EventDemo>

    )
  }
}

var styles = StyleSheet.create({
  openImageStyle: {
    width: AppUtils.size.width,
    height: AppUtils.size.height
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  stateBarStyle: {
    width: AppUtils.size.width,
    height: 50
  }
})

