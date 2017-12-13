import React, { Component } from 'react';
import {
    Image, View, Text, Button, StatusBar, StyleSheet,
    TouchableOpacity,
    ScrollView,
    Slider,
    Animated
} from 'react-native';
import AppUtils from '../../Utils/AppUtils'
import GlobleView from '../../Globle/GlobleView'
import GlobleKey from '../../Globle/GlobleKey'
import EventBus from '../../Utils/EventBus'
import HDivideLine from '../../Views/HDivideLine'
import Dpi from '../../Utils/Dpi'
import ThemesManager from '../../Themes/ThemesManager'

export default class BottomToolView extends Component {
    static isVisiable = false;
    constructor(props) {
        super(props);
        var that = this;
        this.state = {
            translateY: new Animated.Value(0)
        }
        this.eventListener = function () {
            that._openAnimed();
        }
    }
    _openAnimed() {
        if (BottomToolView.isVisiable) {
            this.state.translateY.setValue(1);
            Animated.timing( // 从时间范围映射到渐变的值。
                this.state.translateY, {
                    toValue: 0,
                    duration: 400,// 动画持续的时间（单位是毫秒），默认为500
                    // delay: 0,// 在一段时间之后开始动画（单位是毫秒），默认为0。
                    useNativeDriver: true, // <-- 加上这一行
                }).start(() => {
                    BottomToolView.isVisiable = false;
                });
        } else {
            this.state.translateY.setValue(0);
            Animated.timing( // 从时间范围映射到渐变的值。
                this.state.translateY, {
                    toValue: 1,
                    duration: 400,// 动画持续的时间（单位是毫秒），默认为500
                    // delay: 0,// 在一段时间之后开始动画（单位是毫秒），默认为0。
                    useNativeDriver: true, // <-- 加上这一行
                }).start(() => {
                    BottomToolView.isVisiable = true;
                });
        }
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.state.isVisiable != nextState.isVisiable) {
            return true;
        } else {
            return false;
        }
    }

    componentDidMount() {
        EventBus.addListener(GlobleKey.KEY_READPAGE_CLICK_EVENT, this.eventListener)
    }
    componentWillUnmount() {
        EventBus.removeListener(GlobleKey.KEY_READPAGE_CLICK_EVENT, this.eventListener);
    }
    render() {
        let that = this;
        var spin = null;
        spin = this.state.translateY.interpolate({
            inputRange: [0, 1],
            outputRange: [1 * Dpi.d(265), 0]
        })
        return (
            <Animated.View style={[viewStyle.rootViewStyle, {
                transform: [
                    { translateY: spin }, // x轴移动
                ]
            }]}>
                <HDivideLine></HDivideLine>
                <View style={viewStyle.changeChaptetStyle}>
                    <Text>上一章</Text>
                    <Slider minimumTrackTintColor={ThemesManager.themesHightLightColor} value={0.5} thumbTintColor={ThemesManager.themesHightLightColor} maximumTrackTintColor='#f4e3e0' style={viewStyle.sliderStyle}></Slider>
                    <Text>下一章</Text>

                </View>
                <HDivideLine></HDivideLine>
                <View style={viewStyle.containerStyle}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => { alert('点击了') }}>
                        <View style={viewStyle.toolStyle}>
                            <Image style={viewStyle.toolImageStyle} source={require('../../../novelResource/read_page_menu.png')}></Image>
                            <Text style={viewStyle.toolTextStyle}>目录</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => { alert('点击了') }}>
                        <View style={viewStyle.toolStyle}>
                            <Image style={viewStyle.toolImageStyle} source={require('../../../novelResource/read_page_huyan.png')}></Image>
                            <Text style={viewStyle.toolTextStyle}>护眼</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => { alert('点击了') }}>
                        <View style={viewStyle.toolStyle}>
                            <Image style={viewStyle.toolImageStyle} source={require('../../../novelResource/read_page_huanyuan.png')}></Image>
                            <Text style={viewStyle.toolTextStyle}>换源</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => { alert('点击了') }}>
                        <View style={viewStyle.toolStyle}>
                            <Image style={viewStyle.toolImageStyle} source={require('../../../novelResource/read_page_yejian.png')}></Image>
                            <Text style={viewStyle.toolTextStyle}>夜间</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => { alert('点击了') }}>
                        <View style={viewStyle.toolStyle}>
                            <Image style={viewStyle.toolImageStyle} source={require('../../../novelResource/read_page_ting.png')}></Image>
                            <Text style={viewStyle.toolTextStyle}>听书</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => {
                        //点击了设置
                        EventBus.emit(GlobleKey.KEY_READPAGE_BOTTOM_TOOLVIEW_EVENT, { actionType: 'setting' });
                        EventBus.emit(GlobleKey.KEY_READPAGE_CLICK_EVENT);
                    }}>
                        <View style={viewStyle.toolStyle}>
                            <Image style={viewStyle.toolImageStyle} source={require('../../../novelResource/read_page_textsize.png')}></Image>
                            <Text style={viewStyle.toolTextStyle}>设置</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        )
    }
}

var viewStyle = StyleSheet.create({
    rootViewStyle: {
        bottom: 0,
        position: 'absolute',
        flexDirection: 'column',
        alignItems: 'center',
        height: Dpi.d(265),
        backgroundColor: '#ffffff'
    },
    containerStyle: {
        width: AppUtils.size.width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: Dpi.d(130),
    },
    changeChaptetStyle: {
        paddingHorizontal: Dpi.d(30),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: Dpi.d(130),
    },
    sliderStyle: {
        flex: 1,
    },
    // scrollViewSytle: {
    //     borderRadius: 7,
    //     borderColor: 'gray',
    //     marginHorizontal: 20,
    //     flexDirection: 'column',
    //     borderWidth: AppUtils.pixel,
    //     height: 40,
    // },
    toolStyle: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: Dpi.d(150),
    },
    toolTextStyle: {
        fontSize: 15,
        textAlign: 'center'
    },
    toolImageStyle: {
        marginTop: Dpi.d(10),
        width: Dpi.d(46),
        height: Dpi.d(46),
    }
})