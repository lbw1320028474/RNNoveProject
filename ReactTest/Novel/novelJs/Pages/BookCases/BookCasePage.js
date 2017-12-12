import React, { Component } from 'react';
import {
    Image,
    View,
    Text,
    StatusBar,
    ScrollView,
    StyleSheet,
    ListView,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import Dpi from '../../Utils/Dpi'
import GlobleKey from '../../Globle/GlobleKey'
import GlobleVar from '../../Globle/GlobleVar'
import AppUtils from '../../Utils/AppUtils'
import ThemesManager from '../../Themes/ThemesManager'
import HDivideLine from '../../Views/HDivideLine'
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
export default class BookCasePage extends Component {
    constructor(props) {
        super(props);
        this.topActionBarRef = null;
        this.swipeListRef = null;
        this.canUpdata = false;
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            listViewData: Array(0).fill('').map((_, i) => i)
        };
    }
    //删除数据
    deleteRow(secId, rowId, rowMap, that) {
        that.canUpdata = true;
        rowMap[`${secId}${rowId}`].closeRow();
        const newData = [...this.state.listViewData];
        newData.splice(rowId, 1);
        this.setState({ listViewData: newData });
        //this.swipeListRef.updataTip
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // if (this.state.listViewData !== nextState.listViewData) {
        //     return true;
        // } else {
        //}
        if (this.canUpdata) {
            this.canUpdata = false;
            return true;
        } else {
            return false;
        }
    }

    render() {
        let that = this;
        return (
            <View style={viewStyle.rootContainer}>
                <View style={viewStyle.actionBarStyle}>
                    <View style={viewStyle.containerStyle}>
                        <Text style={viewStyle.actionTitleTextStyle}>书架</Text>
                    </View>
                </View>
                <View style={viewStyle.contentContainerStyle}>
                    <SwipeListView
                        ref={ref => { this.swipeListRef = ref }}
                        swipeToOpenPercent={100}
                        previewFirstRow={true}
                        closeOnRowBeginSwipe={true}
                        footerView={
                            <TouchableOpacity activeOpacity={0.8}>
                                <View style={viewStyle.addBookContainerStyle}>
                                    <Image resizeMode='stretch' style={viewStyle.addBookIconStyle} source={require('../../../novelResource/bookcase_addbook.png')}></Image>
                                    <Text>添加喜欢的小说</Text>
                                </View>
                            </TouchableOpacity>
                        }
                        dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                        renderRow={data => (
                            that._renderRowView(data, that)
                        )}
                        renderHiddenRow={(data, secId, rowId, rowMap) => (
                            that._renderHiddenRowView(data, secId, rowId, rowMap, that)
                            // <View style={viewStyle.rowBack}>
                            //     <Text>Left</Text>
                            //     <View style={[viewStyle.backRightBtn, viewStyle.backRightBtnLeft]}>
                            //         <Text style={viewStyle.backTextWhite}>Right</Text>
                            //     </View>
                            //     <TouchableOpacity viewStyle={[viewStyle.backRightBtn, viewStyle.backRightBtnRight]} onPress={() => this.deleteRow(secId, rowId, rowMap)}>
                            //         <Text style={viewStyle.backTextWhite}>Delete</Text>
                            //     </TouchableOpacity>
                            // </View>
                        )}
                        closeOnRowPress={true}
                        rightOpenValue={-1 * Dpi.d(200)}
                        stopRightSwipe={-1 * Dpi.d(220)}
                        disableRightSwipe={true}
                    />

                </View>
            </View >
        )
    }

    _renderRowView(data, that) {
        return (
            <View style={viewStyle.frontViewColumnRootViwStyle}>
                <View style={viewStyle.frontViewRootViwStyle}>
                    <View style={viewStyle.bookDesStyle}>
                        <Image style={viewStyle.frontViewBookCoverStyle} source={require('../../../novelResource/bookcovertest.jpg')}></Image>
                        <View style={viewStyle.frontViewTextContainerStyle}>
                            <Text style={viewStyle.bookNameStyle}>凤回巢{data}</Text>
                            <Text style={viewStyle.bookNewChapterStyle}>最新章节：第1376章-天行九歌</Text>
                        </View>
                    </View>
                    <Image style={viewStyle.updataTip} source={require('../../../novelResource/bookcase_updata.png')}></Image>
                </View>
                <HDivideLine></HDivideLine>
            </View>
        )
    }
    _renderHiddenRowView(data, secId, rowId, rowMap, that) {
        return (
            <View style={viewStyle.hiddenViewRootViwStyle}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => {
                    alert('置顶' + data)
                }}>
                    <Text style={viewStyle.hiddenToUpView}>置顶</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => {
                    that.deleteRow(secId, rowId, rowMap, that)
                }}>
                    <Text style={viewStyle.hiddenDeleteView}>删除</Text>
                </TouchableOpacity>
            </View>
        )
    }
}



var viewStyle = StyleSheet.create({
    rootContainer: {    //最外层容器
        backgroundColor: ThemesManager.themesMainColor,
        flex: 1,
        width: AppUtils.size.width,
        paddingBottom: GlobleVar.homeTabViewHeight
    },
    actionBarStyle: {   //工具栏
        backgroundColor: ThemesManager.themesHightLightColor,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: GlobleVar.pageActionBarHeight + GlobleVar.stateBarAdjustViewHeight
    },
    actionTitleTextStyle: { //工具栏文字
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: Dpi.s(36),
        color: ThemesManager.themesMainColor
    },
    containerStyle: {       //子容器
        justifyContent: 'center',
        alignItems: 'center',
        height: GlobleVar.pageActionBarHeight
    },
    contentContainerStyle: {    //数据列表和添加小说容器
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: AppUtils.size.width,
    },
    addBookContainerStyle: {    //添加小说
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: Dpi.d(150),
        width: AppUtils.size.width,
        backgroundColor: ThemesManager.pageBgColor
    },
    addBookIconStyle: {    //添加小说图标
        height: Dpi.d(80),
        width: Dpi.d(80)
    },
    frontViewRootViwStyle: {    //侧滑栏前面根布局
        // borderBottomColor: '',
        // borderBottomWidth: AppUtils.pixel,
        paddingHorizontal: Dpi.d(10),
        backgroundColor: ThemesManager.themesMainColor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: Dpi.d(150),
    },
    frontViewColumnRootViwStyle: {    //侧滑栏前面根布局1
        // borderBottomColor: '',
        // borderBottomWidth: AppUtils.pixel,
    },
    hiddenViewRootViwStyle: {    //侧滑栏后面根布局
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: Dpi.d(150),
    },
    hiddenDeleteView: {    //删除按钮
        textAlign: 'center',
        textAlignVertical: 'center',
        height: Dpi.d(150),
        width: Dpi.d(100),
        color: ThemesManager.themesMainColor,
        backgroundColor: ThemesManager.themesRedColor
    },
    hiddenToUpView: {    //置顶按钮
        textAlign: 'center',
        textAlignVertical: 'center',
        height: Dpi.d(150),
        width: Dpi.d(100),
        color: ThemesManager.themesMainColor,
        backgroundColor: ThemesManager.themesBlackTextMainColorSub4
    },
    frontViewBookCoverStyle: {    //小说封面图片
        marginLeft: Dpi.d(30),
        height: Dpi.d(112),
        width: Dpi.d(90),
        borderRadius: 3
    },
    frontViewTextContainerStyle: {    //小说封面图片
        marginLeft: Dpi.d(10),
        justifyContent: 'center',
        flexDirection: 'column',

    },
    bookDesStyle: {    //小说前面部分
        flexDirection: 'row',
    },
    updataTip: {    //小说前面部分
        width: Dpi.d(72),
        height: Dpi.d(40),
    },
    bookNameStyle: {    //小说前面部分
        fontSize: Dpi.s(36),
        color: ThemesManager.themesBlackTextMainColorSub3,
        paddingVertical: Dpi.d(5),
    },
    bookNewChapterStyle: {
        paddingVertical: Dpi.d(5),
        fontSize: Dpi.s(30),
        color: ThemesManager.themesBlackTextMainColorSub3
    }
})
