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
    TouchableOpacity
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';
import AppUtils from '../../Utils/AppUtils'
import GlobleVar from '../../Globle/GlobleVar'
import BookList from './BookList'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

{/* <IndicatorViewPager
style={{ flex: 1, flexDirection: 'column-reverse' }}
indicator={this._renderTitleIndicator()}
>
<BookList></BookList>
<BookList></BookList>
<BookList></BookList>
<BookList></BookList>
<BookList></BookList>
<BookList></BookList>
<BookList></BookList>

</IndicatorViewPager> */}
export default class BookTabView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View
                style={{ flexDirection: 'column', height: AppUtils.size.height - GlobleVar.SearchViewHeight - 70 + GlobleVar.stateBarAdjustViewHeight}}>
                <ScrollableTabView
                    style={{ flex: 1 }}
                    renderTabBar={() => <ScrollableTabBar />}
                >
                    <View tabLabel='Tab1' style={{ flex: 1 }}>
                        <BookList ></BookList>
                    </View>
                    <View tabLabel='Tab2' style={{ flex: 1 }}>
                        <BookList ></BookList>
                    </View>
                    <View tabLabel='Tab3' style={{ flex: 1 }}>
                        <BookList ></BookList>
                    </View>
                    <View tabLabel='Tab4' style={{ flex: 1 }}>
                        <BookList ></BookList>
                    </View>
                    <View tabLabel='Tab5' style={{ flex: 1 }}>
                        <BookList ></BookList>
                    </View>
                    <View tabLabel='Tab6' style={{ flex: 1 }}>
                        <BookList ></BookList>
                    </View>
                    <View tabLabel='Tab7' style={{ flex: 1 }}>
                        <BookList ></BookList>
                    </View>
                    <View tabLabel='Tab8' style={{ flex: 1 }}>
                        <BookList ></BookList>
                    </View>
                </ScrollableTabView>
            </View>
        )
    }


}

var styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        height: GlobleVar.ModelEntryHeight,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    modelStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        height: GlobleVar.ModelEntryHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modelImageStyle: {
        height: 50,
        width: 50,
    },
    modelTextStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }
    // bgImageStyle: {
    //     position: 'absolute',
    //     height: viewHeight + AppUtils.stateBarAdjustViewHeight,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // inputStyle: {
    //     flexDirection: 'row',
    //     height: 35,
    //     width: AppUtils.size.width - 60,
    //     backgroundColor: '#ffffff',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     marginLeft: 40,
    //     marginRight: 40,
    //     borderRadius: 50,
    //     opacity: 0.5,
    //     marginBottom: 7
    // },
    // searchImageStyle: {
    //     width: 15,
    //     height: 15,
    //     marginRight: 10
    // }
});