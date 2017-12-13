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
    TouchableOpacity,
    Animated
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';
import AppUtils from '../../Utils/AppUtils';
import GlobleVar from '../../Globle/GlobleVar';
import Dpi from '../../Utils/Dpi'
import ThemesManager from '../../Themes/ThemesManager'
//填充状态栏高度,从20的版本开始支持状态栏
var bgOpactiry = 0.5;



export default class SearchInputView extends Component {

    constructor(props) {
        super(props);
        this.widthRef = null;
        this.state = {
            isVisibile: true,
            bgOpacity: new Animated.Value(1)
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.state.isVisibile !== nextState.isVisibile) {
            return true;
        } else {
            return false;
        }
    }
    componentWillMount() {
    }

    render() {
        let that = this;
        if (this.state.isVisibile) {
            return (
                <Animated.View style={[styles.containerStyle, { opacity: this.state.bgOpacity }]}>
                    <TouchableOpacity ref={ref => this.widthRef = ref} style={styles.inputStyle} activeOpacity={0.7} onPress={() => { that.props.onTouchCallBack() }}>
                        <Image resizeMode='stretch' style={styles.searchImageStyle} source={require('../../../novelResource/my_icon.png')}></Image>
                        <Text style={styles.textStyle}>搜索想要的内容</Text>
                    </TouchableOpacity>
                </Animated.View>
            )
        } else {
            return (
                <View></View>
            )
        }
    }

    parentScrolViewScroll(offsetY) {
        upViewHeight = GlobleVar.BannerViewPageHeight + GlobleVar.SearchViewHeight;
        if (offsetY > upViewHeight / 2 && this.state.isVisibile) {
            this._setUnVisibileAnim();
        } else if (offsetY < upViewHeight / 2 && !this.state.isVisibile) {
            this._setVisibileAnim();
        }
    }

    // _openAnimed() {
    //     if (BottomToolView.isVisiable) {
    //         this.state.translateY.setValue(1);
    //         Animated.timing( // 从时间范围映射到渐变的值。
    //             this.state.translateY, {
    //                 toValue: 0,
    //                 duration: 400,// 动画持续的时间（单位是毫秒），默认为500
    //                 // delay: 0,// 在一段时间之后开始动画（单位是毫秒），默认为0。
    //             }).start(() => {
    //                 BottomToolView.isVisiable = false;
    //             });
    //     } else {
    //         this.state.translateY.setValue(0);
    //         Animated.timing( // 从时间范围映射到渐变的值。
    //             this.state.translateY, {
    //                 toValue: 1,
    //                 duration: 400,// 动画持续的时间（单位是毫秒），默认为500
    //                 // delay: 0,// 在一段时间之后开始动画（单位是毫秒），默认为0。
    //             }).start(() => {
    //                 BottomToolView.isVisiable = true;
    //             });
    //     }
    // }
    //开始隐藏动画
    _setUnVisibileAnim() {
        let that = this;
        that.state.bgOpacity.setValue(1);
        Animated.timing( // 从时间范围映射到渐变的值。
            this.state.bgOpacity, {
                toValue: 0,
                duration: 1000,// 动画持续的时间（单位是毫秒），默认为500
                // delay: 0,// 在一段时间之后开始动画（单位是毫秒），默认为0。
            }).start(() => {
                that.setState({ isVisibile: false })
            });
    }
    //开始显示动画
    _setVisibileAnim() {
        let that = this;
        that.state.bgOpacity.setValue(0);
        Animated.timing( // 从时间范围映射到渐变的值。
            this.state.bgOpacity, {
                toValue: 1,
                duration: 1000,// 动画持续的时间（单位是毫秒），默认为500
                // delay: 0,// 在一段时间之后开始动画（单位是毫秒），默认为0。
            }).start(() => {
                that.setState({ isVisibile: true })
            });
    }

}

var styles = StyleSheet.create({
    containerStyle: {
        position: 'absolute',
        right: 0,
        width: AppUtils.size.width,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        height: GlobleVar.SearchViewHeight + GlobleVar.stateBarAdjustViewHeight,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    bgImageStyle: {
        position: 'absolute',
        height: GlobleVar.SearchViewHeight + GlobleVar.stateBarAdjustViewHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputStyle: {
        flexDirection: 'row',
        height: Dpi.d(50),
        width: AppUtils.size.width - Dpi.d(120),
        marginRight: Dpi.d(60),
        backgroundColor: 'rgba(255,255,255,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    searchImageStyle: {
        width: Dpi.d(20),
        height: Dpi.d(30),
        marginRight: 10
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: Dpi.s(22),
        color: ThemesManager.themesMainColor
    }
});