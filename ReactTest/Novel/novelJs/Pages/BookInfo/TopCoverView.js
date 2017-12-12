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

export default class TopCoverView extends Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    render() {
        return (
            <View style={viewStyle.containerStyle}>
                <Image style={viewStyle.blurimageStyle} source={require('../../../novelResource/cover_test_bg.png')}></Image>
                <Image style={viewStyle.markimageStyle} source={require('../../../novelResource/bookinfo_markimage.png')}></Image>
                <View style={viewStyle.descriptStyle}>
                    <Image style={viewStyle.coverimageStyle} source={require('../../../novelResource/bookcovertest.jpg')}></Image>
                    <View style={{ marginLeft: Dpi.d(30), flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Text style={{ marginTop: Dpi.d(20), color: ThemesManager.themesMainColor, fontSize: Dpi.s(36) }}>霸道总裁：老婆复婚吧</Text>
                        <View>
                            <Text style={{ fontSize: Dpi.s(30), color: ThemesManager.themesHightLightColor }}>闷骚的虱子 | 仙侠</Text>
                            <Text style={{ fontSize: Dpi.s(30), marginTop: Dpi.d(20) }}>完结 | 6753章</Text>
                        </View>
                    </View>
                </View>
                <Image resizeMode='stretch' style={viewStyle.shadowimageStyle} source={require('../../../novelResource/bookcover_shadow.png')}></Image>
                <Text numberOfLines={5} style={viewStyle.descriptTextStyle}>
                    《步步惊心》是2005年网上连载的穿越小说，作者是桐华。[1]  该小说主要讲述了现代白领张晓因车祸穿越到清朝康熙年间，成为满族少女马尔泰·若曦，身不由己地卷入“九子夺嫡”的纷争。她看透所有人的命运，却无法掌握自己的结局，个人情感夹杂在争斗的惨烈中备受煎熬。经历几番爱恨嗔痴，身心俱疲的故事。
                </Text>
            </View >
        )
    }
}

{/* <BottomToolView></BottomToolView>
    <BookReadSetting></BookReadSetting> */}

var viewStyle = StyleSheet.create({
    containerStyle: {//容器样式
        backgroundColor: '#ffffff'
    },
    blurimageStyle: {   //模糊视图图片样式
        height: Dpi.d(300),
        width: AppUtils.size.width,
    },
    markimageStyle: {   //幅度样式
        height: Dpi.d(60),
        width: AppUtils.size.width,
        marginTop: -1 * Dpi.d(60)
    },
    shadowimageStyle: {   //幅度样式
        height: Dpi.d(40),
        width: Dpi.d(180),
        marginTop: -1 * Dpi.d(10),
        marginLeft: Dpi.d(40),
    },
    descriptStyle: {        //小说详细的描述样式
        flexDirection: 'row',
        marginTop: -1 * Dpi.d(120),
    },
    descriptTextStyle: {        //小说简介文字样式
        padding: Dpi.d(35),
        lineHeight: Dpi.d(50),
        fontSize: Dpi.s(30)
    },
    coverimageStyle: {      //图书封面样式
        marginLeft: Dpi.d(35),
        height: Dpi.d(240),
        width: Dpi.d(180),
        borderRadius: Dpi.d(10),
        borderWidth: Dpi.d(4),
        borderColor: '#ffffff'
    },
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


