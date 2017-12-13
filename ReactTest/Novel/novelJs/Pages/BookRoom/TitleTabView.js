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
    TouchableOpacity,
    ViewPropTypes
} from 'react-native';
import PropTypes from 'prop-types'
import {
    StackNavigator,
} from 'react-navigation';
import AppUtils from '../../Utils/AppUtils';
import GlobleVar from '../../Globle/GlobleVar';
import ThemesManager from '../../Themes/ThemesManager'
import HDivideLine from '../../Views/HDivideLine'
import Dpi from '../../Utils/Dpi'
var titleSubViews = [];     //tab 列表
var selectedTabIndex = 0;
var tabWidth = Dpi.d(180);
var scrollViewOffX = 0;

export default class TitleTabView extends Component {
    static propTypes = {
        tabIndex: PropTypes.number,
        rootViewStyle: ViewPropTypes.style,
        titles: PropTypes.array,
        navStyle: ViewPropTypes.style,
        onSelect: PropTypes.func
    }
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 0
        };
        this.searchImage = null;
        this.scrollViewRef = null;
    }

    componentWillMount() {
        this.state.selectedTab = this.props.tabIndex;
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.state.selectedTab === nextState.selectedTab) {
            return false;
        } else {
            return true;
        }
    }

    select(index) {
        if (index >= 0 && index < titleSubViews.length) {
            console.log('移动位置:' + index * tabWidth);
            if (index * tabWidth + scrollViewOffX + tabWidth >= AppUtils.size.width - Dpi.d(25) || index * tabWidth <= scrollViewOffX) {
                this.scrollViewRef.scrollTo({ x: index * tabWidth, animated: true })
            }
            if (this.state.selectedTab != index) {
                this.setState({ selectedTab: index });
            }
        }
    }

    parentScrolViewScroll(offsetY) {
        if (offsetY >= 0 && offsetY < GlobleVar.BannerViewPageHeight + GlobleVar.SearchViewHeight) {
            newWidth = offsetY / (GlobleVar.BannerViewPageHeight + GlobleVar.SearchViewHeight) * Dpi.d(25);
            newHeight = offsetY / (GlobleVar.BannerViewPageHeight + GlobleVar.SearchViewHeight) * Dpi.d(35);
            newMargin = offsetY / (GlobleVar.BannerViewPageHeight + GlobleVar.SearchViewHeight) * Dpi.d(30);
            this.searchImage.setNativeProps({
                style: {
                    width: newWidth,
                    height: newHeight,
                    marginHorizontal: newMargin
                }
            })
        } else {
            newWidth = Dpi.d(25);
            newHeight = Dpi.d(35);
            newMargin = Dpi.d(30);
            this.searchImage.setNativeProps({
                style: {
                    width: newWidth,
                    height: newHeight,
                    marginHorizontal: newMargin
                }
            })
        }
    }

    render() {
        let that = this;
        titles = that.props.titles;
        if (!titles || titles === 0) {
            return null;
        }
        let j = 0;
        selectedTabIndex = this.state.selectedTab;
        titleSubViews = [];
        for (var i in titles) {
            titleSubViews.push(
                <TouchableOpacity activeOpacity={0.8} key={j} onPress={this.props.onSelect.bind(this, titles[j].offsetY)}>
                    <View style={styles.tabStyle}>
                        <Text style={[styles.titleStyle, (j === selectedTabIndex) ? this.props.titleSelectedStyle : this.props.titleNormalStyle]}>{titles[j].tabTitle}</Text>
                        <View style={[styles.navStyle, this.props.navStyle, { opacity: (j === selectedTabIndex) ? 1 : 0 }]}></View>
                    </View>
                </TouchableOpacity>
            )
            j += 1;
        }
        return (
            <View style={styles.rootViewStyle}>
                <View style={styles.headBottomDividestyle}></View>
                <View style={styles.containerViewStyle}>
                    <ScrollView
                        onScroll={(event) => {
                            scrollViewOffX = event.nativeEvent.contentOffset.x
                        }}
                        ref={ref => this.scrollViewRef = ref}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}>
                        <View style={styles.containerStyle}>
                            {titleSubViews}
                        </View>
                    </ScrollView>
                    <Image
                        ref={ref => this.searchImage = ref}
                        resizeMode='stretch'
                        tintColor={ThemesManager.themesBlackTextMainColorSub1}
                        style={styles.searchStyle}
                        source={require('../../../novelResource/my_icon.png')}></Image>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    rootViewStyle: {
        width: AppUtils.size.width,
        backgroundColor: ThemesManager.themesMainColor,
    },
    containerViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        width: AppUtils.size.width,
    },
    headBottomDividestyle: {
        height: GlobleVar.stateBarAdjustViewHeight,
        backgroundColor: ThemesManager.pageBgColor
    },
    navStyle: {
        width: tabWidth - Dpi.d(80),
        height: 2,
        borderRadius: 4
    },
    tabStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: GlobleVar.noverlistModelTitleHeight,
        width: tabWidth
    },
    containerStyle: {
        flexDirection: 'row',
    },
    titleStyle: {
        fontSize: Dpi.s(30),
    },
    searchStyle: {
        width: Dpi.d(0),
        height: Dpi.d(0),
        marginHorizontal: Dpi.d(0)
    },
});