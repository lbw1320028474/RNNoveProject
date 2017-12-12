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

export default class BookInfoList extends Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    render() {
        return (
            <View style={viewStyle.containerStyle}>
                <Text style={viewStyle.listTitleStyle}>目录</Text>
                <TouchableOpacity activeOpacity={0.5}>
                    <View style={{ marginBottom: Dpi.d(30), flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={viewStyle.subListStyle}>第345章： 称霸世界，一念成沧海</Text>
                        <Text style={viewStyle.newTipStyle}>new</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5}>
                    <Text style={viewStyle.subListStyle}>第1章： 永远不要相信他</Text>
                </TouchableOpacity>
                <View style={{ marginVertical: Dpi.d(15) }}>
                    <HDivideLine></HDivideLine>
                </View>
                <TouchableOpacity activeOpacity={0.5}>
                    <Text style={viewStyle.subListStyle}>第2章： 王的女人</Text>
                </TouchableOpacity>
                <View style={{ marginVertical: Dpi.d(15) }}>
                    <HDivideLine></HDivideLine>
                </View>
                <TouchableOpacity activeOpacity={0.5}>
                    <Text style={viewStyle.subListStyle}>第3章： 怎么会这样？</Text>
                </TouchableOpacity>
                <View style={{ marginVertical: Dpi.d(15) }}>
                    <HDivideLine></HDivideLine>
                </View>
                <TouchableOpacity activeOpacity={0.5}>
                    <Text style={viewStyle.moreListStyle}>查看更多列表</Text>
                </TouchableOpacity>
            </View >
        )
    }
}

{/* <BottomToolView></BottomToolView>
    <BookReadSetting></BookReadSetting> */}

var viewStyle = StyleSheet.create({
    containerStyle: {//容器样式
        marginTop: Dpi.d(15),
        padding: Dpi.d(35),
        backgroundColor: '#ffffff'
    },
    listTitleStyle: {
        fontSize: Dpi.s(36),
        paddingBottom: Dpi.d(30),
    },
    subListStyle: {
        fontSize: Dpi.s(30),
    },
    moreListStyle: {
        textAlign: 'center',
        fontSize: Dpi.s(36),
    },
    newTipStyle: {
        color: ThemesManager.themesMainColor,
        backgroundColor: '#5a7fea',
        borderRadius: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingHorizontal: Dpi.d(5),
        fontSize: Dpi.s(30),
    },

})


