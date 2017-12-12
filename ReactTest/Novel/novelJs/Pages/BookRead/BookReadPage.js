import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    Animated,
} from 'react-native';
import BottomToolView from './BottomToolView'
import TopToolView from './TopToolView'
import BookReadSetting from './BookReadSetting'
import AppUtils from '../../Utils/AppUtils'
import EventBus from '../../Utils/EventBus'
import GlobleKey from '../../Globle/GlobleKey'
import BookReadView from './BookReadView'
import ThemesManager from '../../Themes/ThemesManager'
export default class BookReadPage extends Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    render() {
        return (
            <View style={viewStyle.containerStyle}>
                <StatusBar
                    style={{ opacity: 0.4 }}
                    backgroundColor={ThemesManager.stateBarBgColor}
                    barStyle='light-content'
                    hidden={true}
                />
                <View style={viewStyle.containerStyle}>
                    <BookReadView></BookReadView>
                    <TopToolView navigation={this.props.navigation}></TopToolView>
                    <BottomToolView></BottomToolView>
                    <BookReadSetting></BookReadSetting>
                </View>
            </View >
        )
    }
}

{/* <BottomToolView></BottomToolView>
    <BookReadSetting></BookReadSetting> */}

var viewStyle = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
    moreSettingStyle: {
        justifyContent: 'space-between',
        flexDirection: 'column',
        flex: 1
    },

})