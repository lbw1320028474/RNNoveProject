import React, { Component } from 'react';
import {
    Dimensions,
    PixelRatio,
    StyleSheet,
    Platform
} from 'react-native';
import AppUtils from '../Utils/AppUtils'
import Dpi from '../Utils/Dpi'
var stateBarHeights = 22;//用来填充状态栏的高度，主要用来做沉浸式状态栏，防止状态栏覆盖内容布局
module.exports = {
    BannerViewPageHeight: Dpi.d(360),   //书架页轮播图的高度
    ModelEntryHeight: AppUtils.size.height / 6,        //书架页五大入口高度
    stateBarHeight: stateBarHeights,
    stateBarAdjustViewHeight: (Platform.OS === 'ios') ? Dpi.d(45) : (Platform.Version > 19 ? Dpi.d(45) : 0),
    SearchViewHeight: Dpi.d(60),
    homeTabViewHeight: Dpi.d(102),      //首页底部tabview高度
    noverlistModelTitleHeight: Dpi.d(80),       //精选页模块标题高度
    noverListItemHeight: Dpi.d(260),
    noverListItemMargginBottom: 15,  //列表底部margin距离
    headViewHDvideLineHeight: Dpi.d(45),        //头部列表底部分隔条高度
    listTabViewHeight: 30,
    pageActionBarHeight: Dpi.d(95)

}