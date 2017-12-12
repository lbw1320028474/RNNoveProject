import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StatusBar,
    ScrollView,
    StyleSheet
} from 'react-native';
import TopCoverView from './TopCoverView'
import Dpi from '../../Utils/Dpi'
import GlobleKey from '../../Globle/GlobleKey'
import AppUtils from '../../Utils/AppUtils'
import BookInfoList from './BookInfoList'
import BookInfoRecommend from './BookInfoRecommend'
import BookInfoButton from './BookInfoButton'
import TopActionBar from './TopActionBar'
export default class BookInfoPage extends Component {
    constructor(props) {
        super(props);
        this.topActionBarRef = null;
    }
    render() {
        let that = this;
        return (
            <View style={viewStyle.containerStyle}>
                <ScrollView

                    style={viewStyle.scrollViewStyle}
                    onScroll={(event) => {
                        //发送滑动事件的通知
                        this.topActionBarRef.updataBgOpacity(event.nativeEvent.contentOffset.y)
                    }}
                >
                    <TopCoverView></TopCoverView>
                    <BookInfoList></BookInfoList>
                    <BookInfoRecommend></BookInfoRecommend>
                </ScrollView>
                <BookInfoButton navigation={this.props.navigation}></BookInfoButton>
                <TopActionBar
                    title='霸道总裁：老婆复婚吧'
                    ref={ref => this.topActionBarRef = ref}
                    bgRequire={require('../../../novelResource/bookcovertest.jpg')}
                    navigation={this.props.navigation}></TopActionBar>
            </View>
        )
    }
}


var viewStyle = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
    blurimageStyle: {
        height: Dpi.d(300),
        width: AppUtils.size.width,
    },
    scrollViewStyle: {
        flex: 1
    },
    // moreSettingStyle: {
    //     justifyContent: 'space-between',
    //     flexDirection: 'column',
    //     flex: 1
    // },
    // readViewStyle: {
    //     position: 'absolute',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     height: AppUtils.size.height,
    //     width: AppUtils.size.width,
    // }
})
