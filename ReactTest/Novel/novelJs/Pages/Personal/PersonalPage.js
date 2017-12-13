import React, { Component } from 'react';
import {
    Image,
    View,
    Text,
    StatusBar,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    InteractionManager
} from 'react-native';
import Dpi from '../../Utils/Dpi'
import GlobleKey from '../../Globle/GlobleKey'
import GlobleVar from '../../Globle/GlobleVar'
import AppUtils from '../../Utils/AppUtils'
import ThemesManager from '../../Themes/ThemesManager'
import HDivideLine from '../../Views/HDivideLine'
import { Bars } from 'react-native-loader';
export default class PersonalPage extends Component {
    constructor(props) {
        super(props);
        this.topActionBarRef = null;
        this.state = {
            renderPlaceholderOnly: true,
        };
        this.timer = null;
    }

    componentDidMount() {
        let that = this;
        // this.timer = setTimeout(function () {
        //     that.setState({ renderPlaceholderOnly: false });
        // }, 2000);
        InteractionManager.runAfterInteractions(() => {
            this.setState({ renderPlaceholderOnly: false });
        });
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.renderPlaceholderOnly !== nextState.renderPlaceholderOnly) {
            return true;
        } else {
            return false;
        }
    }

    _renderView(that) {
        return (
            <ScrollView>
                <View style={viewStyle.userDataStyle}>
                    <Image resizeMode='stretch' style={viewStyle.userCoverStyle} source={require('../../../novelResource/personal_cover.png')}></Image>
                    <View style={{ marginLeft: Dpi.d(20) }}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => { alert('登录') }}>
                                <Text style={viewStyle.loadTextStyle}>登录</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={viewStyle.readTimeTextStyle}>立即体验你的阅读时光</Text>
                    </View>
                </View>
                <View style={viewStyle.itemContainerStyle}>
                    <TouchableOpacity>
                        <View style={viewStyle.itemSub2ContainerStyle}>
                            <View style={viewStyle.itemSubContainerStyle}>
                                <Image resizeMode='stretch' style={viewStyle.itemLeftIconStyle} source={require('../../../novelResource/personal_coin.png')}></Image>
                                <Text style={viewStyle.itemTextStyle}>金币商城</Text>
                            </View>
                            <Image resizeMode='stretch' style={viewStyle.itemRightIconStyle} source={require('../../../novelResource/to_right_icon.png')}></Image>
                        </View>
                    </TouchableOpacity>
                    <HDivideLine></HDivideLine>
                    <TouchableOpacity>
                        <View style={viewStyle.itemSub2ContainerStyle}>
                            <View style={viewStyle.itemSubContainerStyle}>
                                <Image resizeMode='stretch' style={viewStyle.itemLeftIconStyle} source={require('../../../novelResource/personal_rank.png')}></Image>
                                <Text style={viewStyle.itemTextStyle}>邀请排行</Text>
                            </View>
                            <Image resizeMode='stretch' style={viewStyle.itemRightIconStyle} source={require('../../../novelResource/to_right_icon.png')}></Image>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={viewStyle.itemContainerStyle}>
                    <TouchableOpacity>
                        <View style={viewStyle.itemSub2ContainerStyle}>
                            <View style={viewStyle.itemSubContainerStyle}>
                                <Image resizeMode='stretch' style={viewStyle.itemLeftIconStyle} source={require('../../../novelResource/personal_aboutme.png')}></Image>
                                <Text style={viewStyle.itemTextStyle}>关于我们</Text>
                            </View>
                            <Image resizeMode='stretch' style={viewStyle.itemRightIconStyle} source={require('../../../novelResource/to_right_icon.png')}></Image>
                        </View>
                    </TouchableOpacity>
                    <HDivideLine></HDivideLine>
                    <TouchableOpacity>
                        <View style={viewStyle.itemSub2ContainerStyle}>
                            <View style={viewStyle.itemSubContainerStyle}>
                                <Image resizeMode='stretch' style={viewStyle.itemLeftIconStyle} source={require('../../../novelResource/personal_feedback.png')}></Image>
                                <Text style={viewStyle.itemTextStyle}>反馈建议</Text>
                            </View>
                            <Image resizeMode='stretch' style={viewStyle.itemRightIconStyle} source={require('../../../novelResource/to_right_icon.png')}></Image>
                        </View>
                    </TouchableOpacity>
                    <HDivideLine></HDivideLine>
                    <TouchableOpacity>
                        <View style={viewStyle.itemSub2ContainerStyle}>
                            <View style={viewStyle.itemSubContainerStyle}>
                                <Image resizeMode='stretch' style={viewStyle.itemLeftIconStyle} source={require('../../../novelResource/personal_setting.png')}></Image>
                                <Text style={viewStyle.itemTextStyle}>设置</Text>
                            </View>
                            <Image resizeMode='stretch' style={viewStyle.itemRightIconStyle} source={require('../../../novelResource/to_right_icon.png')}></Image>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }

    render() {
        let that = this;
        return (
            <View>
                <StatusBar
                    style={{ opacity: 0.4 }}
                    backgroundColor={ThemesManager.stateBarBgColor}
                    barStyle='light-content'
                    translucent={true}
                />
                <View style={viewStyle.actionBarStyle}>
                    <View style={viewStyle.containerStyle}>
                        <Text style={viewStyle.actionTitleTextStyle}>个人</Text>
                    </View>
                </View>
                {
                    that.state.renderPlaceholderOnly ? <View></View> : that._renderView(that)
                }
            </View >
        )
    }
}


var viewStyle = StyleSheet.create({
    actionBarStyle: {
        backgroundColor: ThemesManager.themesHightLightColor,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: GlobleVar.pageActionBarHeight + GlobleVar.stateBarAdjustViewHeight
    },
    actionTitleTextStyle: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: Dpi.s(36),
        color: ThemesManager.themesMainColor
    },
    containerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: GlobleVar.pageActionBarHeight
    },
    userDataStyle: {
        backgroundColor: ThemesManager.themesMainColor,
        padding: Dpi.d(30),
        flexDirection: 'row',
        alignItems: 'center',
        height: Dpi.d(227),

    },
    userCoverStyle: {
        width: Dpi.d(115),
        height: Dpi.d(115)
    },
    loadTextStyle: {
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingHorizontal: Dpi.d(15),
        paddingVertical: Dpi.d(5),
        fontSize: Dpi.s(30),
        color: ThemesManager.themesHightLightColor,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: ThemesManager.themesHightLightColor,
        backgroundColor: ThemesManager.themesMainColor
    },
    readTimeTextStyle: {
        marginTop: Dpi.d(20),
        fontSize: Dpi.s(30),
        color: ThemesManager.themesBlackTextMainColorSub2,
        backgroundColor: ThemesManager.themesMainColor
    },
    itemLeftIconStyle: {
        width: Dpi.d(46),
        height: Dpi.d(46)
    },
    itemTextStyle: {
        textAlignVertical: 'center',
        color: ThemesManager.themesBlackTextMainColorSub1,
        fontSize: Dpi.s(30),
        height: Dpi.d(46)
    },
    itemRightIconStyle: {
        width: Dpi.d(15),
        height: Dpi.d(26)
    },
    itemContainerStyle: {
        marginTop: Dpi.d(20),
        padding: Dpi.d(20),
        backgroundColor: ThemesManager.themesMainColor,
    },
    itemSubContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemSub2ContainerStyle: {
        paddingVertical: Dpi.d(20),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }

})
