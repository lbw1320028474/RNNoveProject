import React, { Component } from 'react';
import {
    Image,
    View,
    Text,
    Button,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import AppUtils from '../../Utils/AppUtils'
import EventBus from '../../Utils/EventBus'
import GlobleKey from '../../Globle/GlobleKey'
import Dpi from '../../Utils/Dpi'
import ThemesManager from '../../Themes/ThemesManager'
import HDivideLine from '../../Views/HDivideLine'
var recommendCoverImageWidth = AppUtils.size.width / 5;
export default class BookInfoButton extends Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    render() {
        return (
            <View style={viewStyle.containerStyle}>
                <TouchableOpacity activeOpacity={0.7} >
                    <Text style={viewStyle.addToBookCaseStyle}>+书架</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}  onPress={()=>{
                    this.props.navigation.navigate('KEY_BookReadPage');
                }}>
                    <Text style={viewStyle.readNowStyle}>+立即阅读</Text>
                </TouchableOpacity>
            </View >
        )
    }
}

{/* <BottomToolView></BottomToolView>
    <BookReadSetting></BookReadSetting> */}

var viewStyle = StyleSheet.create({
    containerStyle: {//容器样式
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        width: AppUtils.size.width,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        justifyContent: 'space-around'
    },
    addToBookCaseStyle: {
        height: Dpi.d(95),
        textAlign: 'center',
        color: ThemesManager.themesHightLightColor,
        fontSize: 20,
        width: AppUtils.size.width / 2,
        textAlignVertical: 'center',
    },
    readNowStyle: {
        textAlignVertical: 'center',
        height: Dpi.d(95),
        width: AppUtils.size.width / 2,
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: ThemesManager.themesHightLightColor,
        color: ThemesManager.themesMainColor
    }
    // bookNameMormalStyle: {
    //     fontSize: 16,
    // },
    // bookNameStyle: {
    //     color: ThemesManager.themesHightLightColor,
    //     fontSize: 16,
    // },
    // recommendStyle: {
    //     width: recommendCoverImageWidth,
    //     height: recommendCoverImageWidth * 1.4
    // },
    // recommendContainer: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-around'
    // },
    // subCommendStyle: {
    //     alignItems: 'center',
    //     marginTop: Dpi.d(15),
    // },
    // commendBookNameStyle: {

    //     maxWidth: recommendCoverImageWidth,
    //     fontSize: 19
    // }

})


