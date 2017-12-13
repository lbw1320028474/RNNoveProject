import React, { Component } from 'react';
import {
    Image, View, Text, Button, StatusBar, StyleSheet,
    TouchableOpacity,
    ScrollView,
    Animated,
    Easing
} from 'react-native';
import AppUtils from '../../Utils/AppUtils'
import GlobleView from '../../Globle/GlobleView'
import Dpi from '../../Utils/Dpi'
import EventBus from '../../Utils/EventBus'
import GlobleKey from '../../Globle/GlobleKey'
export default class TopToolView extends Component {
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

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }


    _openAnimed() {
        if (TopToolView.isVisiable) {
            this.state.translateY.setValue(1);
            Animated.timing( // 从时间范围映射到渐变的值。
                this.state.translateY, {
                    toValue: 0,
                    duration: 400,// 动画持续的时间（单位是毫秒），默认为500
                    // delay: 0,// 在一段时间之后开始动画（单位是毫秒），默认为0。
                    useNativeDriver: true, // <-- 加上这一行
                }).start(() => {
                    TopToolView.isVisiable = false;

                });
        } else {
            this.state.translateY.setValue(0);
            Animated.timing( // 从时间范围映射到渐变的值。
                this.state.translateY, {
                    toValue: 1,
                    duration: 400,// 动画持续的时间（单位是毫秒），默认为500
                    useNativeDriver: true, // <-- 加上这一行
                    // delay: 0,// 在一段时间之后开始动画（单位是毫秒），默认为0。
                }).start(() => {
                    TopToolView.isVisiable = true;
                });
        }
    }





    componentWillUnmount() {
        EventBus.removeListener(GlobleKey.KEY_READPAGE_CLICK_EVENT, this.eventListener);
    }
    componentDidMount() {
        EventBus.addListener(GlobleKey.KEY_READPAGE_CLICK_EVENT, this.eventListener);
    }
    render() {
        var spin = null;
        spin = this.state.translateY.interpolate({
            inputRange: [0, 1],
            outputRange: [-1 * Dpi.d(95), 0]
        })
        let that = this;
        //if (this.state.isVisiable) {
        return (
            <Animated.View style={[viewStyle.containerStyle, {
                transform: [
                    { translateY: spin }, // x轴移动
                ],
            }]}>
                <TouchableOpacity onPress={() => { that.props.navigation.goBack() }}>
                    {GlobleView.backIcon}
                </TouchableOpacity>
                <ScrollView style={viewStyle.scrollViewSytle} horizontal={true}>
                    <Text numberOfLines={1} style={viewStyle.httpUrlStyle}>http://www.bookbl.com/xs/58842/17092646.htmlhttp://www.bookbl.com/xs/58842/17092646.htmlhttp://www.bookbl.com/xs/58842/17092646.htmlhttp://www.bookbl.com/xs/58842/17092646.html</Text>
                </ScrollView>
                <Image resizeMode='stretch' style={viewStyle.toWebIcon} source={require('../../../novelResource/open_by_web.png')}></Image>
            </Animated.View>
        )
        // } else {
        //     return <View></View>;
        // }
    }
}

var viewStyle = StyleSheet.create({
    containerStyle: {
        width: AppUtils.size.width,
        position: 'absolute',
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: Dpi.d(95),
        backgroundColor: '#ffffff'
    },
    scrollViewSytle: {
        flex: 1,
        borderRadius: 7,
        borderColor: 'gray',
        marginHorizontal: 20,
        flexDirection: 'column',
        borderWidth: AppUtils.pixel,
        height: 40,
    },
    httpUrlStyle: {
        textAlignVertical: 'center',
        height: 40,
    },
    toWebIcon: {
        width: 30,
        height: 30,
    }
})