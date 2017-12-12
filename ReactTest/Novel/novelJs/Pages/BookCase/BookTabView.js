//五大模块入口
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
    TouchableOpacity
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';
import AppUtils from '../../Utils/AppUtils'
import GlobleVar from '../../Globle/GlobleVar'
import { PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator } from 'rn-viewpager';
import BookCaseList from './BookCaseList'
export default class BookTabView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View
                style={{ flex: 1, flexDirection: 'column' }}>
                <IndicatorViewPager
                    style={{ flex: 1, flexDirection: 'column-reverse' }}
                    indicator={this._renderTitleIndicator()}
                >
                    <BookCaseList></BookCaseList>
                    <BookCaseList></BookCaseList>
                    <BookCaseList></BookCaseList>
                    <BookCaseList></BookCaseList>
                    <BookCaseList></BookCaseList>
                    <BookCaseList></BookCaseList>
                    <BookCaseList></BookCaseList>

                </IndicatorViewPager>
            </View>
        )
    }
    _renderTitleIndicator() {
        return <PagerTitleIndicator titles={['主编力推-女生', '主编力推-男生', '女屏新书', '男屏新书', '男屏新书', '男屏新书', '男屏新书']} />;
    }


}

var styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        height: GlobleVar.ModelEntryHeight,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    modelStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        height: GlobleVar.ModelEntryHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modelImageStyle: {
        height: 50,
        width: 50,
    },
    modelTextStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }
    // bgImageStyle: {
    //     position: 'absolute',
    //     height: viewHeight + AppUtils.stateBarAdjustViewHeight,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // inputStyle: {
    //     flexDirection: 'row',
    //     height: 35,
    //     width: AppUtils.size.width - 60,
    //     backgroundColor: '#ffffff',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     marginLeft: 40,
    //     marginRight: 40,
    //     borderRadius: 50,
    //     opacity: 0.5,
    //     marginBottom: 7
    // },
    // searchImageStyle: {
    //     width: 15,
    //     height: 15,
    //     marginRight: 10
    // }
});