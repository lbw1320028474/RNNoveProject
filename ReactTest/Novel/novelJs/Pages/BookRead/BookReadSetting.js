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
    static isShow = false;
    constructor(props) {
        super(props);
        var that = this;
        this.state = {
            translateY: new Animated.Value(0)
        }
        this.bottomToolEventListener = function (params) {
            that._openAnimed();
            // //alert('收到事件' + params.actionType)
            // if (params.actionType === 'setting') {
            //     if (that.state.isVisiable) {
            //         that.setState({ isVisiable: false })
            //     } else {
            //         that.setState({ isVisiable: true })
            //     }
            // }
        };
        this.readPageEventListener = function () {
            if (BottomToolView.isShow) {
                that._openAnimed();
            }
            //alert('收到事件' + params.actionType)
            // if (that.state.isVisiable) {
            //     that.setState({ isVisiable: false })
            // }
        }
    }

    _openAnimed() {
        if (BottomToolView.isShow) {
            this.state.translateY.setValue(1);
            Animated.timing( // 从时间范围映射到渐变的值。
                this.state.translateY, {
                    toValue: 0,
                    duration: 400,// 动画持续的时间（单位是毫秒），默认为500
                    // delay: 0,// 在一段时间之后开始动画（单位是毫秒），默认为0。
                }).start(() => {
                    BottomToolView.isShow = false;
                });
        } else {
            this.state.translateY.setValue(0);
            Animated.timing( // 从时间范围映射到渐变的值。
                this.state.translateY, {
                    toValue: 1,
                    duration: 400,// 动画持续的时间（单位是毫秒），默认为500
                    // delay: 0,// 在一段时间之后开始动画（单位是毫秒），默认为0。
                }).start(() => {
                    BottomToolView.isShow = true;
                });
        }
    }

    componentWillUnmount() {
        EventBus.removeListener(GlobleKey.KEY_READPAGE_TOP_TOOLVIEW_EVENT, this.bottomToolEventListener);
        EventBus.removeListener(GlobleKey.KEY_READPAGE_TO_READMORESETTING_EVENT, this.readPageEventListener);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.state.isVisiable !== nextState.isVisiable) {
            return true;
        } else {
            return false;
        }
    }

    componentDidMount() {
        EventBus.addListener(GlobleKey.KEY_READPAGE_BOTTOM_TOOLVIEW_EVENT, this.bottomToolEventListener);
        EventBus.addListener(GlobleKey.KEY_READPAGE_TO_READMORESETTING_EVENT, this.readPageEventListener);
    }




    render() {
        let that = this;
        var spin = null;
        spin = this.state.translateY.interpolate({
            inputRange: [0, 1],
            outputRange: [Dpi.d(500), 0]
        })
        return (
            <Animated.View style={[viewStyle.rootViewStyle, { transform: [{ translateY: spin }] }]}>
                <View style={viewStyle.itemStyle}>
                    <Text style={viewStyle.normalTextStyle}>明暗</Text>
                    <Image style={viewStyle.tipIconImage} resizeMode='stretch' source={require('../../../novelResource/huyan_light_small.png')}></Image>
                    <Slider minimumTrackTintColor={ThemesManager.themesHightLightColor} value={0.5} thumbTintColor={ThemesManager.themesHightLightColor} style={viewStyle.sliderStyle}></Slider>
                    <Image style={viewStyle.tipIconImage} resizeMode='stretch' source={require('../../../novelResource/huyan_light_big.png')}></Image>
                    <Text style={[viewStyle.txtModelStyle, { marginLeft: Dpi.d(15) }]}>系统</Text>
                </View>
                <HDivideLine></HDivideLine>
                <View style={viewStyle.itemStyle}>
                    <Text style={viewStyle.normalTextStyle}>背景</Text>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} >
                        <Image resizeMode='stretch' style={viewStyle.bgChoseModelStyle} source={require('../../../novelResource/read_bg_3_preview_normal.9.png')}></Image>
                        <Image resizeMode='stretch' style={viewStyle.bgChoseModelStyle} source={require('../../../novelResource/read_bg_3_preview_normal.9.png')}></Image>
                        <Image resizeMode='stretch' style={viewStyle.bgChoseModelStyle} source={require('../../../novelResource/read_bg_3_preview_normal.9.png')}></Image>
                        <Image resizeMode='stretch' style={viewStyle.bgChoseModelStyle} source={require('../../../novelResource/read_bg_3_preview_normal.9.png')}></Image>
                        <Image resizeMode='stretch' style={viewStyle.bgChoseModelStyle} source={require('../../../novelResource/read_bg_3_preview_normal.9.png')}></Image>
                    </ScrollView>
                </View>
                <HDivideLine></HDivideLine>
                <View style={viewStyle.itemStyle}>
                    <Text style={viewStyle.normalTextStyle}>字号</Text>
                    <Image style={viewStyle.tipIconImage} resizeMode='stretch' source={require('../../../novelResource/read_page_textsize.png')}></Image>
                    <Slider minimumTrackTintColor={ThemesManager.themesHightLightColor} value={0.5} thumbTintColor={ThemesManager.themesHightLightColor} style={viewStyle.sliderStyle}></Slider>
                    <Image style={viewStyle.tipIconImage} resizeMode='stretch' source={require('../../../novelResource/read_page_textsize.png')}></Image>
                    <Text style={[viewStyle.txtModelStyle, { marginLeft: Dpi.d(15) }]}>系统</Text>
                </View>
                <HDivideLine></HDivideLine>
                <View style={viewStyle.itemStyle}>
                    <Text style={viewStyle.normalTextStyle}>翻页</Text>
                    <View style={viewStyle.subitemStyle}>
                        <Text style={viewStyle.txtModelStyle}>禁止</Text>
                        <Text style={viewStyle.txtModelStyle}>滑动</Text>
                        <Text style={viewStyle.txtModelStyle}>覆盖</Text>
                    </View>
                </View>
                <HDivideLine></HDivideLine>
                <View style={viewStyle.itemStyle}>
                    <Text style={viewStyle.normalTextStyle}>间距</Text>
                    <View style={viewStyle.subitemStyle}>
                        <Image resizeMode='stretch' style={viewStyle.lineSpaceModeStyle} source={require('../../../novelResource/read_page_linespace_small_select.png')}></Image>
                        <Image resizeMode='stretch' style={viewStyle.lineSpaceModeStyle} source={require('../../../novelResource/huyan_line_space_mid_normal.png')}></Image>
                        <Image resizeMode='stretch' style={viewStyle.lineSpaceModeStyle} source={require('../../../novelResource/huyan_line_space_small.png')}></Image>
                    </View>
                </View>
                <HDivideLine></HDivideLine>
            </Animated.View >
        )
    }
}
var viewStyle = StyleSheet.create({
    normalTextStyle: {
        fontSize: 14,
        marginHorizontal: Dpi.d(10)
    },
    rootViewStyle: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'column',
        alignItems: 'center',
        height: Dpi.d(500),
        backgroundColor: '#ffffff'
    },
    txtModelStyle: {
        fontSize: Dpi.s(26),
        paddingHorizontal: Dpi.d(17),
        paddingVertical: Dpi.d(8),
        borderRadius: 5,
        borderWidth: AppUtils.pixel
    },
    bgChoseModelStyle: {
        borderRadius: 3,
        marginRight: Dpi.d(40),
        width: Dpi.d(100),
        height: Dpi.d(60),
    },
    lineSpaceModeStyle: {
        borderRadius: 3,
        width: Dpi.d(80),
        height: Dpi.d(50),
    },
    itemStyle: {
        paddingHorizontal: Dpi.d(20),
        width: AppUtils.size.width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: Dpi.d(100),
    },
    subitemStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: Dpi.d(100),
    },
    tipIconImage: {
        width: Dpi.d(46),
        height: Dpi.d(48)
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
        height: 80,
    },
    toolTextStyle: {
        fontSize: 15,
        textAlign: 'center'
    },
    toolImageStyle: {
        width: 45,
        height: 45,
    }
})