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

    constructor(props) {
        super(props);
        this.state = { searchBgOpaCity: 0.0, viewPageTitleIndex: 0 };
        this.tabViewRef = null;
        this.flatListRef = null;
        this.searchBgOpa = null;
        this.scrollRef = null;  //是否可滑动的索引

        this._toDetalWithData();
    }

    _toDetalWithData() {

        let tabTitleData = [];
        let index = 0;
        let modelOffsetY = GlobleVar.BannerViewPageHeight + GlobleVar.ModelEntryHeight + ((GlobleVar.stateBarAdjustViewHeight === 0) ? Dpi.d(45) : 0) + GlobleVar.stateBarAdjustViewHeight + 5;
        sectionTestData.push(
            {
                category: 0,        //用来区分小说是属于什么类型的
                itemType: 'head',
                data: { banner: bookRoomPageData.data[0].bannerItems, moderItems: bookRoomPageData.data[1].moderItems },
                key: index,
            }
        );
        index += 1;
        // modelOffsetY = modelOffsetY + GlobleVar.ModelEntryHeight;
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
        modelOffsetY = modelOffsetY + GlobleVar.listTabViewHeight + GlobleVar.stateBarAdjustViewHeight;
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
            modelOffsetY = modelOffsetY + GlobleVar.noverlistModelTitleHeight + + GlobleVar.noverListItemMargginBottom;
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
                modelOffsetY = modelOffsetY + GlobleVar.noverListItemHeight;
            }
            novelListCatetory += 1;
        }
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }
    render() {
        let that = this;
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

    //列表的实际内容
    _renderSectionChildItem = info => {
        let myitem = info.item
        let myindex = info.index

        if (myitem.itemType === 'head') {
            return (
                <View>
                    <BannerView navigation={this.props.navigation} dataParams={myitem.data.banner}></BannerView>
                    <ModelEntryView navigation={this.props.navigation} dataParams={myitem.data.moderItems}></ModelEntryView>
                    {
                        (GlobleVar.stateBarAdjustViewHeight === 0) ? <View style={styles.headBottomDividestyle}></View> : null
                    }
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


    _toSearch() {
        this.props.navigation.navigate('KEY_SearchPage');
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
    },
    headBottomDividestyle: {
        height: Dpi.d(45),
        backgroundColor: ThemesManager.pageBgColor
    },
})