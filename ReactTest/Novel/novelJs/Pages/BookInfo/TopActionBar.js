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
import GlobleVar from '../../Globle/GlobleVar'
import Dpi from '../../Utils/Dpi'
import GlobleView from '../../Globle/GlobleView'
import ThemesManager from '../../Themes/ThemesManager'
import events from 'events'
var actionBarBgOpacity = 0;
export default class TopActionBar extends Component {
    constructor(props) {
        super(props);
        this.actionBarBg = null;
    }
    updataBgOpacity(offsetY) {
        console.log('收到滑动通知:' + offsetY);
        if (offsetY / Dpi.d(150) > 1) {
            actionBarBgOpacity = 1;
        } else {
            actionBarBgOpacity = offsetY / Dpi.d(150);
        }
        this.actionBarBg.setNativeProps({
            style: { opacity: actionBarBgOpacity }
        })
    }
    componentDidMount() {

    }

    componentWillUnmount() {

    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    render() {
        let that = this;
        return (
            <View style={viewStyle.containerStyle}>
                <View
                    ref={ref => this.actionBarBg = ref}
                    style={viewStyle.bgContainerViewStyle}>
                    <Image
                        blurRadius={10}
                        style={viewStyle.bgStyle}
                        source={this.props.bgRequire}></Image>
                    <Text style={viewStyle.titleTextStyle}>{this.props.title}</Text>
                </View>
                <TouchableOpacity style={{ padding: Dpi.d(20) }} onPress={() => { that.props.navigation.goBack() }}>
                    <Image tintColor='#ffffff' resizeMode='stretch' style={viewStyle.backIconStyle} source={require('../../../novelResource/back_icon.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: Dpi.d(20) }} onPress={() => { alert('分享') }}>
                    <Image tintColor='#ffffff' resizeMode='stretch' style={viewStyle.shareIconStyle} source={require('../../../novelResource/icon_share.png')}></Image>
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
        width: AppUtils.size.width,
        height: Dpi.d(96) + GlobleVar.stateBarAdjustViewHeight,
        flexDirection: 'row',

        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    bgContainerViewStyle: {//容器样式
        opacity: 0,
        position: 'absolute',
        width: AppUtils.size.width,
        height: Dpi.d(96) + + GlobleVar.stateBarAdjustViewHeight,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    backIconStyle: {
        width: 12,
        height: 20,
    },
    shareIconStyle: {
        width: 20,
        height: 25,
    },
    bgStyle: {
        position: 'absolute',
        width: AppUtils.size.width,
        height: Dpi.d(96) + GlobleVar.stateBarAdjustViewHeight,
    },
    titleTextStyle: {
        marginBottom: Dpi.d(20),
        fontSize: Dpi.d(36),
        color: ThemesManager.themesMainColor
    }
    // moreSettingStyle: {
    //     justifyContent: 'space-between',
    //     flexDirection: 'column',
    //     flex: 1
    // },
    // readViewStyle: {
    //     position: 'absolute',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     height: AppUtils.size.height,
    //     width: AppUtils.size.width,
    // }
})


