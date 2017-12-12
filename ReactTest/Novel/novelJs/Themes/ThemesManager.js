import React, { Component } from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';
import Dpi from '../Utils/Dpi'


module.exports = {
    homeTabBar: {
        tabIcon: {
            bookCaseIconNormal: <Image resizeMode='stretch' style={{ width: Dpi.d(50), height: Dpi.d(50) }} source={require('../../novelResource/tab_bookcase_normal.png')}></Image>,
            bookCaseIconSelected: <Image resizeMode='stretch' style={{ width: Dpi.d(50), height: Dpi.d(50) }} source={require('../../novelResource/tab_bookcase_selected.png')}></Image>,

            bookRoomIconNormal: <Image resizeMode='stretch' style={{ width: Dpi.d(50), height: Dpi.d(50) }} source={require('../../novelResource/tab_bookroom_normal.png')}></Image>,
            bookRoomIconSelected: <Image resizeMode='stretch' style={{ width: Dpi.d(50), height: Dpi.d(50) }} source={require('../../novelResource/tab_bookroom_selected.png')}></Image>,

            personalIconNormal: <Image resizeMode='stretch' style={{ width: Dpi.d(50), height: Dpi.d(50) }} source={require('../../novelResource/tab_personal_normal.png')}></Image>,
            personalIconSelected: <Image resizeMode='stretch' style={{ width: Dpi.d(50), height: Dpi.d(50) }} source={require('../../novelResource/tab_personal_selected.png')}></Image>
        },
        tabTextColor: {
            textColorNormal: '#000000',
            textColorSelected: '#0000ff'
        },
    },

    themesRedColor: '#f66055',
    themesMainColor: '#ffffff',
    themesHightLightColor: '#ea7824',
    themesHightLightColorSub1: '#eaa15a',
    themesHightLightColorSub2: '#39bc76',
    themesHightLightColorSub3: '#5a7fea',
    themesBlackTextMainColor: '#333333',
    themesBlackTextMainColorSub1: '#666666',
    themesBlackTextMainColorSub2: '#808080',
    themesBlackTextMainColorSub4: '#cbc9c9',
    themesBlackTextMainColorSub3: '#999999',
    stateBarBgColor: 'rgba(0, 0, 0, 0.3)',
    topBarImage: <Image></Image>,
    bottomBarImage: <Image></Image>,
    bookRoomViewPageTitleNormalColor: '#868386',
    bookRoomViewPageTitleSelectedColor: '#f77162',
    pageBgColor: '#f5f5f5',
};
