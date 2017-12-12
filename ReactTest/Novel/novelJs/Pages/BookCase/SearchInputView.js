import React, { Component } from 'react';
import {
    Button,
    ScrollView,
    Text,
    Image,
    StyleSheet,
    View,
    Platform,
    StatusBar,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';
import AppUtils from '../../Utils/AppUtils'
import GolbleVar from '../../Globle/GlobleVar'
//填充状态栏高度,从20的版本开始支持状态栏
var viewHeight = 50;
var bgOpactiry = 0.5;
export default class SearchInputView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let that = this;
        bgOpactiry = that.props.bgOpacity;
        return (
            <View style={styles.containerStyle}>
                <Image style={[styles.bgImageStyle, { opacity: bgOpactiry }]} source={require('../../pages/app_image/action_bar_bg.png')}></Image>
                <TouchableOpacity activeOpacity={0.7} onPress={() => { that.props.onTouchCallBack() }}>
                    <View style={styles.inputStyle}>
                        <Image resizeMode='stretch' style={styles.searchImageStyle} source={require('../../pages/app_image/my_icon.png')}></Image>
                        <Text>{bgOpactiry}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }


}

var styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        height: GolbleVar.SearchViewHeight,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    bgImageStyle: {
        position: 'absolute',
        height: viewHeight + GolbleVar.stateBarAdjustViewHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputStyle: {
        flexDirection: 'row',
        height: 35,
        width: AppUtils.size.width - 60,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 20,
        opacity: 0.5,
        marginBottom: 7
    },
    searchImageStyle: {
        width: 15,
        height: 15,
        marginRight: 10
    }
});