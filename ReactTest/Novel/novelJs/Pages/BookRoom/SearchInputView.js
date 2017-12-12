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
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }
    componentWillMount() {
    }

    render() {
        let that = this;
        bgOpactiry = that.props.bgOpacity;
        return (
            <View style={styles.containerStyle}>
                {/* <Image
                    ref={ref => this.bgOpacity = ref}
                    style={styles.bgImageStyle}
                //source={require('../../../novelResource/action_bar_bg.png')}
                /> */}
                <TouchableOpacity ref={ref => this.widthRef = ref} style={styles.inputStyle} activeOpacity={0.7} onPress={() => { that.props.onTouchCallBack() }}>
                    <Image resizeMode='stretch' style={styles.searchImageStyle} source={require('../../../novelResource/my_icon.png')}></Image>
                    <Text style={styles.textStyle}>搜索想要的内容</Text>
                </TouchableOpacity>
            </View>
        )
    }

    parentScrolViewScroll(offsetY) {
        upViewHeight = GlobleVar.BannerViewPageHeight + GlobleVar.SearchViewHeight;
        viewWidth = AppUtils.size.width - Dpi.d(120);
        if (offsetY >= 0 && offsetY < upViewHeight) {
            newWidth = (upViewHeight - offsetY) / upViewHeight * viewWidth;
            this.widthRef.setNativeProps({
                style: {
                    width: newWidth,
                }
            })
        } else {
            newWidth = 0;
            this.widthRef.setNativeProps({
                style: {
                    width: newWidth,
                }
            })
        }
    }

    _changeBgOpacity(opa) {
        this.bgOpacity.setNativeProps({
            style: { opacity: opa }
        })
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
        height: Dpi.d(60),
        width: AppUtils.size.width - Dpi.d(120),
        marginRight: Dpi.d(60),
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        opacity: 0.7,
    },
    searchImageStyle: {
        width: Dpi.d(20),
        height: Dpi.d(30),
        marginRight: 10
    },
    textStyle: {
        fontSize: Dpi.s(22),
        color: ThemesManager.themesMainColor
    }
});