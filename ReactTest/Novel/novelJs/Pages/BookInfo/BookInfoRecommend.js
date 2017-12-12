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
export default class BookInfoRecommend extends Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    render() {
        return (
            <View style={viewStyle.containerStyle}>
                <Text style={viewStyle.bookNameMormalStyle}>喜欢 {
                    <Text style={viewStyle.bookNameStyle}>霸道总裁：老婆复婚吧</Text>
                } 的人还看过</Text>
                <View style={viewStyle.recommendContainer}>
                    <TouchableOpacity>
                        <View style={viewStyle.subCommendStyle}>
                            <Image style={viewStyle.recommendStyle} source={require('../../../novelResource/book_cover.jpeg')}></Image>
                            <Text numberOfLines={2} style={viewStyle.commendBookNameStyle}>王者的板甲</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={viewStyle.subCommendStyle}>
                            <Image style={viewStyle.recommendStyle} source={require('../../../novelResource/book_cover.jpeg')}></Image>
                            <Text numberOfLines={2} style={viewStyle.commendBookNameStyle}>绿灯的回声</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={viewStyle.subCommendStyle}>
                            <Image style={viewStyle.recommendStyle} source={require('../../../novelResource/book_cover.jpeg')}></Image>
                            <Text numberOfLines={2} style={viewStyle.commendBookNameStyle}>英雄联盟-王者之路-我要退游了，要一起吗</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={viewStyle.subCommendStyle}>
                            <Image style={viewStyle.recommendStyle} source={require('../../../novelResource/book_cover.jpeg')}></Image>
                            <Text numberOfLines={2} style={viewStyle.commendBookNameStyle}>王者的板甲</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }
}

{/* <BottomToolView></BottomToolView>
    <BookReadSetting></BookReadSetting> */}

var viewStyle = StyleSheet.create({
    containerStyle: {//容器样式
        marginBottom: Dpi.d(95),
        marginTop: Dpi.d(15),
        padding: Dpi.d(36),
        backgroundColor: '#ffffff'
    },
    bookNameMormalStyle: {
        fontSize: Dpi.s(30),
    },
    bookNameStyle: {
        color: ThemesManager.themesHightLightColor,
        fontSize: Dpi.s(30),
    },
    recommendStyle: {
        width: recommendCoverImageWidth,
        height: recommendCoverImageWidth * 1.4
    },
    recommendContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    subCommendStyle: {
        alignItems: 'center',
        marginTop: Dpi.d(15),
    },
    commendBookNameStyle: {

        maxWidth: recommendCoverImageWidth,
        fontSize: Dpi.s(30)
    }

})


