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
    RefreshControl
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';
import AppUtils from '../../Utils/AppUtils/..'
//填充状态栏高度,从20的版本开始支持状态栏
import SearchInputView from './SearchInputView'
import BookRoomViewPage from './BookRoomViewPage'
import ModelEntry from './ModelEntry'
import GlobleVar from '../../Globle/GlobleVar'
import BookTabView from './BookTabView'
import { ViewPager } from 'rn-viewpager';
import BookCaseList from './BookCaseList'
import ViewPageTitle from './ViewPageTitle'

var stateBarHeight = Platform.Version > 19 ? 25 : 0;
////selectCallBack, selectedIndex, normaltabColor, selectedTabColor, textSize, tabIndexLineStyle
//var upTabView = <PagerTitleIndicator titles={['主编力推-女生', '主编力推-男生', '女屏新书', '男屏新书']} />


export default class BookRoomPage extends Component {
    // getDefaultProps() {
    //     // this.props.lineColor = 'gray';
    //     // this.props.lineWidth = AppUtils.pixel;
    // }
    constructor(props) {
        super(props);
        this.state = { searchBgOpaCity: 0.0, viewPageTitleIndex: 0, viewPageIndex: 0, isRefreshing: false }
    }
    render() {
        let that = this;
        return (
            <View style={styles.contentViewStyle}>
                <StatusBar
                    backgroundColor="transparent"
                    barStyle="light-content"
                    translucent={true}
                />

                <View style={styles.contentViewStyle}>
                    <View style={styles.contentViewStyle}>
                        <ScrollView

                            style={styles.scrollViewStyle}
                            stickyHeaderIndices={[2]}
                            onScroll={(event) => { this._changeSearchBgOpacity(event.nativeEvent.contentOffset.y) }}
                        >
                            <BookRoomViewPage ></BookRoomViewPage>
                            <View>
                                <ModelEntry></ModelEntry>
                            </View>
                            <ViewPageTitle
                                style={{ marginTop: -1 * GlobleVar.SearchViewHeight }}
                                selectedIndex={this.state.viewPageTitleIndex}
                                normaltabColor='#868386'
                                selectedTabColor='#f77162'
                                textSize={15}
                                selectCallBack={(index) => {
                                    // this.setState({ viewPageIndex: index });
                                    this.ViewPager.setPage(index)
                                }}
                            ></ViewPageTitle>
                            <View
                                style={{ backgroundColor: '#000000', flex: 1, flexDirection: 'column' }}
                            >
                                <ViewPager
                                    initialPage={this.state.viewPageIndex}
                                    ref={e => this.ViewPager = e}
                                    onPageSelected={(position) => {
                                        that.setState({ viewPageIndex: position.position, viewPageTitleIndex: position.position });
                                    }}
                                    style={{ flex: 1 }}
                                >
                                    <BookCaseList></BookCaseList>
                                    <BookCaseList></BookCaseList>
                                    <BookCaseList></BookCaseList>
                                    <BookCaseList></BookCaseList>
                                    <BookCaseList></BookCaseList>

                                </ViewPager>
                            </View>
                        </ScrollView>
                    </View>

                    <View position='absolute'>
                        <SearchInputView style={styles.searchStyle} onTouchCallBack={() => { this._toSearch() }} bgOpacity={that.state.searchBgOpaCity}></SearchInputView>
                    </View>

                </View>

            </View>
        )
    }
    //修改搜索栏背景透明度
    _changeSearchBgOpacity(offsetY) {
        let scrolledY = offsetY;
        let sBgOpacity = 0;
        let headHeight = GlobleVar.BannerViewPageHeight + GlobleVar.ModelEntryHeight;
        if (scrolledY <= headHeight) {
            sBgOpacity = scrolledY / headHeight;
        } else {
            sBgOpacity = 1;
        }
        if (sBgOpacity < 1) {
            this.setState({ searchBgOpaCity: sBgOpacity });
        }
    }
    //点击了搜索
    _toSearch() {
        alert("搜索");
    }
}

var styles = StyleSheet.create({
    viewPagePageStyle: {
        // backgroundColor:'#ff0000'
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flex: 1
    },
    containerStyle: {
        // backgroundColor:'#ff0000' F

    },
    contentViewStyle: {
        flex: 1,
        justifyContent: 'flex-start',
        // marginTop: AppUtils.stateBarAdjustViewHeight
        flexDirection: 'column',

    },
    searchStyle: {

    },
    lineStyle: {
        backgroundColor: 'gray',
        height: 1
    },
    scrollViewStyle: {
        flex: 1,
        flexDirection: 'column'
    }
});