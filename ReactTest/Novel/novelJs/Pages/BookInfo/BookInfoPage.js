import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StatusBar,
    ScrollView,
    StyleSheet,
    InteractionManager
} from 'react-native';
import TopCoverView from './TopCoverView'
import Dpi from '../../Utils/Dpi'
import GlobleKey from '../../Globle/GlobleKey'
import AppUtils from '../../Utils/AppUtils'
import BookInfoList from './BookInfoList'
import BookInfoRecommend from './BookInfoRecommend'
import BookInfoButton from './BookInfoButton'
import TopActionBar from './TopActionBar'
import ThemesManager from '../../Themes/ThemesManager'
import { Bars } from 'react-native-loader';
export default class BookInfoPage extends Component {
    constructor(props) {
        super(props);
        this.topActionBarRef = null;
        this.state = {
            renderPlaceholderOnly: true,
        };
        this.timer = null;
    }
    render() {
        let that = this;
        //<Bars size={10} color={ThemesManager.themesHightLightColor} />
        if (that.state.renderPlaceholderOnly) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Bars size={10} color={ThemesManager.themesHightLightColor} />
                </View>
            )
        } else {
            return that._renderView(that)
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // if (this.state.listViewData !== nextState.listViewData) {
        //     return true;
        // } else {
        //}
        if (this.state.renderPlaceholderOnly !== nextState.renderPlaceholderOnly) {
            return true;
        } else {
            return false;
        }
    }

    componentDidMount() {
        let that = this;
        this.timer = setTimeout(function () {
            that.setState({ renderPlaceholderOnly: false });
        }, 2000);
        // InteractionManager.runAfterInteractions(() => {
        //     this.setState({ renderPlaceholderOnly: false });
        // });
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer)
    }

    _renderView(that) {
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
