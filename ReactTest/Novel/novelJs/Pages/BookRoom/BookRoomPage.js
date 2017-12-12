import React, { Component } from 'react';
import {
    FlatList,
    Button,
    ScrollView,
    Text,
    Image,
    StyleSheet,
    View,
    Platform,
    StatusBar,
    RefreshControl,
    SectionList,
    TouchableOpacity
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';
import AppUtils from '../../Utils/AppUtils'
//填充状态栏高度,从20的版本开始支持状态栏
// import SearchInputView from './SearchInputView'
// import BookRoomViewPage from './BookRoomViewPage'
// import ModelEntry from './ModelEntry'
// import GlobleVar from '../../Globle/GlobleVar'
// import BookTabView from './BookTabView'
// import { ViewPager } from 'rn-viewpager';
// import BookCaseList from './BookCaseList'
// import ViewPageTitle from './ViewPageTitle'


////selectCallBack, selectedIndex, normaltabColor, selectedTabColor, textSize, tabIndexLineStyle
//var upTabView = <PagerTitleIndicator titles={['主编力推-女生', '主编力推-男生', '女屏新书', '男屏新书']} />
import SearchInputView from './SearchInputView'
import BannerView from './BannerView'
import ModelEntryView from './ModelEntryView'
import BookListItem from './BookListItem'
import BookTabView from './BookTabView'
import GlobleVar from '../../Globle/GlobleVar'
import ThemesManager from '../../Themes/ThemesManager'
import BookList from './BookList'
import TitleTabView from './TitleTabView'
import HDivideLine from '../../Views/HDivideLine'
import Dpi from '../../Utils/Dpi'
var scrollViewOffsetY = -1;
var topContentHeight = (GlobleVar.BannerViewPageHeight + GlobleVar.ModelEntryHeight - GlobleVar.SearchViewHeight - GlobleVar.stateBarAdjustViewHeight);
var bookRoomPageData = require("../../../../bookroomtestdata.json"); //小说书库页面测试的数据
let sectionTestData = [];
let headViewHDvideLineHeight = 20;      //列表头部分隔条高度
export default class BookRoomPage extends Component {
    // getDefaultProps() {
    //     // this.props.lineColor = 'gray';
    //     // this.props.lineWidth = AppUtils.pixel;
    // }



    //     <ScrollView
    //     onScroll
    //     ref={e => { this.scrollRef = e }}
    //     scrollEnabled={true}
    //     onScroll={(event) => {
    //         // console.log(event.nativeEvent.contentOffset.y + ' + ' + scrollViewOffsetY)
    //         scrollViewOffsetY = event.nativeEvent.contentOffset.y;
    //         if (event.nativeEvent.contentOffset.y == 0 || Math.abs(scrollViewOffsetY - topContentHeight - GlobleVar.stateBarAdjustViewHeight) <= 1) {
    //             this._changeScrollViewEnAble();
    //         }
    //         console.log(scrollViewOffsetY + " + " + topContentHeight + " + " + Math.abs(scrollViewOffsetY - topContentHeight) + " + " + (scrollViewOffsetY - topContentHeight - GlobleVar.stateBarAdjustViewHeight));
    //         this._changeSearchBgOpacity(event.nativeEvent.contentOffset.y)
    //     }}

    // >
    //     <BannerView ></BannerView>
    //     <ModelEntryView></ModelEntryView>
    //     <BookTabView
    //         subListWantScroll={() => {
    //             this._changeScrollViewEnAble();
    //         }}></BookTabView>
    // </ScrollView>
    constructor(props) {
        super(props);
        this.state = { searchBgOpaCity: 0.0, viewPageTitleIndex: 0 };
        this.tabViewRef = null;
        this.flatListRef = null;
        this.searchBgOpa = null;
        this.scrollRef = null;  //是否可滑动的索引
        // this._renderSectionChildItem = this._renderSectionChildItem.bind(this);  //Sectionlist绑定
        // this._renderSectionGroupItem = this._renderSectionGroupItem.bind(this);
        //alert(bookRoomPageData.data[0].modelName);

        this._toDetalWithData();
    }

    _toDetalWithData() {

        let tabTitleData = [];
        let index = 0;
        let modelOffsetY = 1 + GlobleVar.headViewHDvideLineHeight + GlobleVar.noverlistModelTitleHeight + 5;
        // console.log('banner数据 = ' + bookRoomPageData.data[0].bannerItems[0].bannerImage);
        sectionTestData.push(
            {
                category: 0,        //用来区分小说是属于什么类型的
                itemType: 'head',
                data: { banner: bookRoomPageData.data[0].bannerItems, moderItems: bookRoomPageData.data[1].moderItems },
                key: index,
            }
        );
        index += 1;
        modelOffsetY = modelOffsetY + GlobleVar.BannerViewPageHeight + GlobleVar.ModelEntryHeight;
        sectionTestData.push(
            {
                category: 0,
                itemType: 'tab',
                data: tabTitleData,
                key: index,
            }
        );
        index += 1;
        let novelListCatetory = 0;
        for (var i = 0; i < bookRoomPageData.data[2].listModel.length; ++i) {
            novelListModel = bookRoomPageData.data[2].listModel[i];
            tabTitleData.push(
                {
                    offsetY: modelOffsetY,
                    tabIndex: index,
                    tabTitle: novelListModel.listName
                }
            )
            sectionTestData.push(
                {
                    category: novelListCatetory,
                    itemType: 'group',
                    data: novelListModel.listName,
                    key: index,
                }
            )
            modelOffsetY = modelOffsetY + GlobleVar.noverlistModelTitleHeight;
            index += 1;
            for (var j = 0; j < novelListModel.listItem.length; ++j) {
                sectionTestData.push(
                    {
                        category: novelListCatetory,
                        itemType: 'child',
                        data: novelListModel.listName[j],
                        key: index,
                    }
                )
                index += 1;
                modelOffsetY = modelOffsetY + GlobleVar.noverListItemHeight + GlobleVar.noverListItemMargginBottom;
            }
            novelListCatetory += 1;
        }
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    //     <SectionList
    //     scrollRenderAheadDistance={50}
    //     onViewableItemsChanged={(info) => { console.log(info.minimumViewTime) }}
    //     initialNumToRender={4}
    //     pageSize={4}
    //     ListHeaderComponent={this._renderSectionHead}
    //     stickySectionHeadersEnabled={true}
    //     renderItem={(this._renderSectionChildItem)}
    //     renderSectionHeader={this._renderSectionGroupItem}
    //     sections={sectionTestData}
    // />
    // _getItemType(x) {
    //     if (x === 0) {
    //         return 'head';
    //     } else if (x === 1) {
    //         return 'tab';
    //     } else if (x % 10 == 0) {
    //         return 'group';
    //     } else {
    //         return 'child';
    //     }
    // }
    render() {
        let that = this;


        // for (var i = 0; i < 68; ++i) {
        //     sectionTestData.push(
        //         {
        //             type: this._getItemType(i),
        //             data: '雷帮文' + i,
        //             key: i,
        //             title: '主编力荐',
        //             sectionTitleColor: '#f456a0'
        //         }
        //     )
        // }
        return (
            <View style={styles.rootViewStyle}>
                <StatusBar
                    style={{ opacity: 0.4 }}
                    backgroundColor={ThemesManager.stateBarBgColor}
                    barStyle='light-content'
                    translucent={true}
                />
                <View style={styles.rootViewStyle}>

                    <View style={styles.rootViewStyle}>
                        <FlatList
                            onScroll={(event) => {
                                this.tabViewRef.parentScrolViewScroll(event.nativeEvent.contentOffset.y)
                                this.searchBgOpa.parentScrolViewScroll(event.nativeEvent.contentOffset.y)
                            }}
                            ref={ref => { this.flatListRef = ref }}
                            onViewableItemsChanged={(info) => {
                                try {
                                    this.tabViewRef.select(info.viewableItems[0].item.category);
                                } catch (error) {

                                }
                            }}
                            data={sectionTestData}
                            renderItem={this._renderSectionChildItem}
                            stickyHeaderIndices={[1]}
                        />

                    </View>
                    <SearchInputView
                        ref={e => this.searchBgOpa = e}
                        onTouchCallBack={() => { this._toSearch() }}
                    ></SearchInputView>
                </View>
            </View>
        )
    }

    _changeScrollViewEnAble() {
        console.log('修改滑动方式为不可滑动');
        this.scrollRef.setNativeProps({
            scrollEnabled: false
        })

    }
    //<Image resizeMode='stretch' style={{ width: AppUtils.size.width, height: 130 }} source={require('../../../novelResource/modelentry.png')}></Image>
    //列表的头部组件
    //<ModelEntryView></ModelEntryView>
    // _renderSectionHead = () => {
    //     return (
    //         <View>
    //             <BannerView></BannerView>
    //             <ModelEntryView></ModelEntryView>
    //             <View style={styles.headBottomDividestyle}></View>
    //         </View>
    //     )
    // }

    //列表的实际内容
    _renderSectionChildItem = info => {
        let myitem = info.item
        let myindex = info.index
        // let sectionIndex = info.section.index
        // let shop = this.state.status[sectionIndex]
        // let statusItem = shop.items[index]
        if (myitem.itemType === 'head') {
            //console.log('banner = ' + myitem.data.banner[0].bannerImage);
            return (
                <View>
                    <BannerView navigation={this.props.navigation} dataParams={myitem.data.banner}></BannerView>
                    <ModelEntryView navigation={this.props.navigation} dataParams={myitem.data.moderItems}></ModelEntryView>
                </View>
            )
        } else if (myitem.itemType === 'group') {
            return (
                <View style={styles.sectionGroupTitleStyle}>
                    <Text style={[{ fontSize: Dpi.s(36), textAlign: 'center' }, { color: myitem.sectionTitleColor }]}>{myitem.data}</Text>
                    <TouchableOpacity style={styles.listMoreTouchAbleStyle}>
                        <Image style={styles.listMoreIconStyle} resizeMode='stretch' source={require('../../../novelResource/list_group_more.png')}></Image>
                    </TouchableOpacity>
                </View>
            )
        } else if (myitem.itemType === 'tab') {
            return (
                // <View style={{ height: 60, width: AppUtils.size.width }}><Text>这里是同标题tabview</Text></View>
                <View>
                    <TitleTabView
                        ref={ref => this.tabViewRef = ref}
                        tabIndex={0}
                        titles={myitem.data}
                        rootViewStyle={styles.tabContainerView}
                        titleNormalStyle={styles.tabNormalView}
                        titleSelectedStyle={styles.tabSelectedView}
                        navStyle={styles.navView}
                        onSelect={(index) => {
                            //alert('滑动到' + index)
                            this.flatListRef.scrollToOffset({ offset: index });
                        }}
                    ></TitleTabView>
                    <HDivideLine></HDivideLine>
                </View>
            )
        } else {
            return (
                <BookListItem navigation={this.props.navigation} listText={myitem.title}></BookListItem>
            )
        }
    }

    // //列表的标题
    // _renderSectionGroupItem = info => {
    //     return (
    //         <View style={styles.sectionGroupTitleStyle}>
    //             <Text style={[{ fontSize: 22, textAlign: 'center' }, { color: info.section.sectionTitleColor }]}>{info.section.groupName}</Text>
    //         </View>
    //     )
    // }

    _toSearch() {
        alert('去搜索');
    }

    // //修改搜索栏背景透明度
    // _changeSearchBgOpacity(offsetY) {
    //     let scrolledY = offsetY;
    //     let sBgOpacity = 0;
    //     let headHeight = GlobleVar.BannerViewPageHeight + GlobleVar.ModelEntryHeight;
    //     if (scrolledY <= headHeight) {
    //         sBgOpacity = scrolledY / headHeight;
    //     } else {
    //         sBgOpacity = 1;
    //     }
    //     if (sBgOpacity < 1) {
    //         this.searchBgOpa._changeBgOpacity(sBgOpacity);
    //         // 异步发布事件，非阻塞，无需等待订阅者处理结束
    //     }
    // }
    //点击了搜索
    _toSearch() {
        alert("搜索");
    }

};


var styles = StyleSheet.create({
    rootViewStyle: {
        backgroundColor: '#ffffff',
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },

    sectionGroupTitleStyle: {
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchViewStyle: {
    },
    scrollViewRootViewStyle: {
        flexDirection: 'column',
    },
    scrollViewStyle: {
        height: AppUtils.size.height,
        backgroundColor: '#ff0000',
        flexDirection: 'column',
    },
    navView: {
        height: 4,
        backgroundColor: ThemesManager.themesHightLightColorSub1,
    },
    tabNormalView: {
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'column',
        textAlign: 'center',
        color: ThemesManager.themesBlackTextMainColorSub3,
    },
    tabContainerView: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabSelectedView: {
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'column',
        textAlign: 'center',
        color: ThemesManager.themesHightLightColor,
    },
    listMoreTouchAbleStyle: {
        position: 'absolute',
        right: Dpi.d(40),
        width: Dpi.d(35),
        height: Dpi.d(35)
    },
    listMoreIconStyle: {
        width: Dpi.d(35),
        height: Dpi.d(35)
    }
})