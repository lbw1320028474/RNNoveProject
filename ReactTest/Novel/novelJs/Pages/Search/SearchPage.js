import React, { Component } from 'react';
import {
    Image,
    View,
    Text,
    StatusBar,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    InteractionManager,
    TextInput
} from 'react-native';
import Dpi from '../../Utils/Dpi'
import GlobleKey from '../../Globle/GlobleKey'
import GlobleVar from '../../Globle/GlobleVar'
import AppUtils from '../../Utils/AppUtils'
import ThemesManager from '../../Themes/ThemesManager'
import HDivideLine from '../../Views/HDivideLine'
import { Bars } from 'react-native-loader';
export default class SearchPage extends Component {
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
                <View style={{ backgroundColor: ThemesManager.themesMainColor, }}>
                    <Text style={{ padding: Dpi.d(10) }}>大家都在搜</Text>
                    <View style={viewStyle.userDataStyle}>
                        <TouchableOpacity>
                            <Text numberOfLines={5} style={viewStyle.tagStyle1}>霸道总裁，未婚选择</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text numberOfLines={5} style={viewStyle.tagStyle2}>霸道总裁</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text numberOfLines={5} style={viewStyle.tagStyle1}>总裁</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text numberOfLines={5} style={viewStyle.tagStyle2}>冥冥之中自有天意</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text numberOfLines={5} style={viewStyle.tagStyle1}>永恒的记忆</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text numberOfLines={5} style={viewStyle.tagStyle2}>阿拉斯加</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text numberOfLines={5} style={viewStyle.tagStyle1}>战狼</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text numberOfLines={5} style={viewStyle.tagStyle2}>未婚妻</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text numberOfLines={5} style={viewStyle.tagStyle1}>霸道总裁</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ backgroundColor: ThemesManager.themesMainColor, }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ padding: Dpi.d(10) }}>搜索历史</Text>
                        <TouchableOpacity>
                            <Image resizeMode='stretch' style={{ marginRight: Dpi.d(28), width: Dpi.d(30), height: Dpi.d(30) }} source={require('../../../novelResource/search_log_delete.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={viewStyle.userDataStyle}>
                        <TouchableOpacity>
                            <Text numberOfLines={5} style={viewStyle.searchLog}>霸道总裁，未婚选择</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text numberOfLines={5} style={viewStyle.searchLog}>霸道总裁</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text numberOfLines={5} style={viewStyle.searchLog}>总裁</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text numberOfLines={5} style={viewStyle.searchLog}>冥冥之中自有天意</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text numberOfLines={5} style={viewStyle.searchLog}>永恒的记忆</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text numberOfLines={5} style={viewStyle.searchLog}>阿拉斯加</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text numberOfLines={5} style={viewStyle.searchLog}>战狼</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text numberOfLines={5} style={viewStyle.searchLog}>未婚妻</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text numberOfLines={5} style={viewStyle.searchLog}>霸道总裁</Text>
                        </TouchableOpacity>
                    </View>
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
                        <TouchableOpacity style={{ padding: Dpi.d(20) }} onPress={() => { that.props.navigation.goBack() }}>
                            <Image tintColor='#ffffff' resizeMode='stretch' style={viewStyle.backIconStyle} source={require('../../../novelResource/back_icon.png')}></Image>
                        </TouchableOpacity>
                        <TextInput underlineColorAndroid="transparent" placeholder='请输入小说名、作者、关键词' style={viewStyle.textInputStyle}></TextInput>
                        <TouchableOpacity style={{ padding: Dpi.d(20) }} onPress={() => { alert('分享') }}>
                            <Text style={viewStyle.beginSearch}>搜索</Text>
                        </TouchableOpacity>
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
        fontSize: Dpi.s(30),
        color: ThemesManager.themesMainColor
    },
    containerStyle: {
        width: AppUtils.size.width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: GlobleVar.pageActionBarHeight
    },
    userDataStyle: {
        padding: Dpi.d(30),
        flexDirection: 'row',
        flexWrap: 'wrap'
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
    },
    backIconStyle: {
        width: Dpi.d(26),
        height: Dpi.d(48),
    },
    beginSearch: {

        fontSize: Dpi.s(30),
        color: ThemesManager.themesMainColor
    },
    tagStyle1: {
        borderRadius: Dpi.d(30),
        paddingHorizontal: Dpi.d(40),
        fontSize: Dpi.s(30),
        color: 'rgb(90,127,234)',
        marginHorizontal: Dpi.d(5),
        marginVertical: Dpi.d(10),
        borderWidth: Dpi.d(1),
        borderColor: 'rgb(90,127,234)',
        backgroundColor: 'rgba(90,127,234,0.3)',
    },
    tagStyle2: {
        borderWidth: Dpi.d(1),
        borderColor: 'rgb(90,127,234)',
        marginHorizontal: Dpi.d(5),
        marginVertical: Dpi.d(10),
        borderRadius: Dpi.d(30),
        paddingHorizontal: Dpi.d(10),
        fontSize: Dpi.s(30),
        color: ThemesManager.themesMainColor,
        backgroundColor: 'rgba(234,120,36,0.3)',
    },
    searchLog: {
        marginHorizontal: Dpi.d(5),
        marginVertical: Dpi.d(10),
        paddingHorizontal: Dpi.d(10),
        fontSize: Dpi.s(30),
        color: ThemesManager.themesBlackTextMainColorSub3,
    },
    textInputStyle: {
        paddingVertical: 0,
        marginHorizontal: Dpi.d(20),
        flex: 1,
        fontSize: Dpi.s(26),
        color: ThemesManager.themesBlackTextMainColorSub1,
        backgroundColor: ThemesManager.themesMainColor,
        borderRadius: Dpi.d(30),
        height: Dpi.d(60),
        textAlignVertical: 'center',
        textAlign: 'center'
    },

})
