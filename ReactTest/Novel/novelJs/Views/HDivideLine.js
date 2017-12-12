import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';
import AppUtils from '../Utils/AppUtils'

export default class HDivideLine extends Component {
    // getDefaultProps() {
    //     // this.props.lineColor = 'gray';
    //     // this.props.lineWidth = AppUtils.pixel;
    // }
    render() {
        return (
            <View style={styles.lineStyle}>
            </View>
        )
    }


}

var styles = StyleSheet.create({
    lineStyle: {
        opacity: 0.2,
        backgroundColor: '#666666',
        height: AppUtils.pixel
    }
});