import React, { Component } from 'react';
import {
    Button,
    ScrollView,
    Text,
    Image,
    StyleSheet,
    View,
    StatusBar
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';
import TabNavigator from 'react-native-tab-navigator';
import ThemesManager from '../Themes/ThemesManager'
import BookCasePage from './BookCases/BookCasePage'
import BookRoomPage from './BookRoom/BookRoomPage'
import PersonalPage from './Personal/PersonalPage'
import AppUtils from '../Utils/AppUtils'
import GlobleVar from '../Globle/GlobleVar'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
export default class HomeTabView extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedTab: 'bookRoom' };
    }


    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.state.selectedTab != nextState.selectedTab) {
            return true;
        } else {
            return false;
        }
    }
    // </TabNavigator>
    // <IndicatorViewPager
    //     style={{ flex: 1, paddingTop: 20, backgroundColor: 'white' }}
    //     indicator={this._renderTabIndicator()}
    // >
    //     <View style={{ backgroundColor: 'cadetblue' }}>
    //         <BookCasePage navigation={that.props.navigation}></BookCasePage>
    //     </View>
    //     <View style={{ backgroundColor: 'cornflowerblue' }}>
    //         <BookRoomPage navigation={that.props.navigation}></BookRoomPage>
    //     </View>
    //     <View style={{ backgroundColor: '#1AA094' }}>
    //         <PersonalPage navigation={that.props.navigation}></PersonalPage>
    //     </View>
    // </IndicatorViewPager>

    // componentDidMount() {
    //     HomeTabView.navigation = this.props.navigation;
    //   }

    //<Image position='absolute' style={styles.tabBottomImageStyle} resizeMode='stretch' source={require('../../novelResource/tab_bottom_image.png')}></Image>
    render() {
        let that = this;
        return (
            <View style={styles.container}>

                <TabNavigator
                    
                    tabBarStyle={{ height: GlobleVar.homeTabViewHeight, overflow: 'hidden', opacity: 0.95 }}
                    sceneStyle={{ paddingBottom: 0 }}
                >
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'bookCase'}
                        title="书架"
                        titleStyle={styles.tabTitleStyle}
                        selectedTitleStyle={styles.tabTitleSelectedStyle}
                        renderIcon={() => ThemesManager.homeTabBar.tabIcon.bookCaseIconNormal}
                        renderSelectedIcon={() => ThemesManager.homeTabBar.tabIcon.bookCaseIconSelected}
                        onPress={() => this.setState({ selectedTab: 'bookCase' })}>
                        <BookCasePage navigation={that.props.navigation}></BookCasePage>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'bookRoom'}
                        title="书库"
                        titleStyle={styles.tabTitleStyle}
                        selectedTitleStyle={styles.tabTitleSelectedStyle}
                        renderIcon={() => ThemesManager.homeTabBar.tabIcon.bookRoomIconNormal}
                        renderSelectedIcon={() => ThemesManager.homeTabBar.tabIcon.bookRoomIconSelected}
                        onPress={() => this.setState({ selectedTab: 'bookRoom' })}>
                        <BookRoomPage navigation={that.props.navigation}></BookRoomPage>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'personal'}
                        title="个人"
                        titleStyle={styles.tabTitleStyle}
                        selectedTitleStyle={styles.tabTitleSelectedStyle}
                        renderIcon={() => ThemesManager.homeTabBar.tabIcon.personalIconNormal}
                        renderSelectedIcon={() => ThemesManager.homeTabBar.tabIcon.personalIconSelected}
                        onPress={() => this.setState({ selectedTab: 'personal' })}>
                        <PersonalPage navigation={that.props.navigation}></PersonalPage>
                    </TabNavigator.Item>
                </TabNavigator>


            </View>

        )
    }


    //     <ScrollableTabView
    //     style={styles.scrollViewContainerStyle}
    //     tabBarUnderlineColor='transparent'
    //     tabBarPosition='bottom'
    // >
    //     <BookCasePage tabLabel="书架" navigation={that.props.navigation}></BookCasePage>
    //     <BookRoomPage tabLabel="书库" navigation={that.props.navigation}></BookRoomPage>
    //     <PersonalPage tabLabel="个人" navigation={that.props.navigation}></PersonalPage>
    // </ScrollableTabView>

}

const styles = StyleSheet.create({
    scrollViewContainerStyle: {
        flex: 1
    },
    container: {
        flex: 1,
    },
    tabBottomImageStyle: {
        width: AppUtils.size.width,
        height: GlobleVar.homeTabViewHeight
    },
    tabTitleStyle: {
        fontSize: 12,
        color: ThemesManager.themesBlackTextMainColorSub3
    },
    tabTitleSelectedStyle: {
        fontSize: 12,
        color: ThemesManager.themesHightLightColor
    }
})
