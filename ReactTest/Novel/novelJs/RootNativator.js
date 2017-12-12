import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import HomeTabView from './Pages/HomeTabView'
import BookInfoPage from './Pages/BookInfo/BookInfoPage'
import BookReadPage from './Pages/BookRead/BookReadPage'

const SceneBookInfoPage = ({ navigation }) => (
    <BookInfoPage navigation={navigation}></BookInfoPage>
);
const SceneHomePage = ({ navigation }) => (
    <HomeTabView navigation={navigation}></HomeTabView>
);
const SceneBookReadPage = ({ navigation }) => (
    <BookReadPage navigation={navigation}></BookReadPage>
);

const NavitationTest = StackNavigator(
    {
        KEY_HomePage: {
            screen: SceneHomePage,
            navigationOptions: ({ navigation }) => ({
                header: null
            }),
        },
        KEY_BookInfoPage: {
            screen: SceneBookInfoPage,
            navigationOptions: ({ navigation }) => ({
                header: null,
                gesturesEnabled: true
            }),
        },
        KEY_BookReadPage: {
            screen: SceneBookReadPage,
            navigationOptions: ({ navigation }) => ({
                header: null,
            }),
        },
    },
    {
        initialRouteName: 'KEY_HomePage',
    }
);

export default NavitationTest;