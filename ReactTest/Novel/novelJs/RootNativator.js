import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import HomeTabView from './Pages/HomeTabView'
import BookInfoPage from './Pages/BookInfo/BookInfoPage'
import BookReadPage from './Pages/BookRead/BookReadPage'
import SearchPage from './Pages/Search/SearchPage'
const SceneBookInfoPage = ({ navigation }) => (
    <BookInfoPage navigation={navigation}></BookInfoPage>
);
const SceneHomePage = ({ navigation }) => (
    <HomeTabView navigation={navigation}></HomeTabView>
);
const SceneBookReadPage = ({ navigation }) => (
    <BookReadPage navigation={navigation}></BookReadPage>
);
const SceneSearchPage = ({ navigation }) => (
    <SearchPage navigation={navigation}></SearchPage>
);

const NavitationTest = StackNavigator(
    {
        KEY_HomePage: {     //首页
            screen: SceneHomePage,
            navigationOptions: ({ navigation }) => ({
                header: null
            }),
        },
        KEY_BookInfoPage: {     //详情页
            screen: SceneBookInfoPage,
            navigationOptions: ({ navigation }) => ({
                header: null,
                gesturesEnabled: true
            }),
        },
        KEY_BookReadPage: {     //阅读页
            screen: SceneBookReadPage,
            navigationOptions: ({ navigation }) => ({
                header: null,
            }),
        },
        KEY_SearchPage: {       //搜索页面
            screen: SceneSearchPage,
            navigationOptions: ({ navigation }) => ({
                header: null,
                gesturesEnabled: true
            }),
        },
    },
    {
        initialRouteName: 'KEY_HomePage',
    }
);

export default NavitationTest;