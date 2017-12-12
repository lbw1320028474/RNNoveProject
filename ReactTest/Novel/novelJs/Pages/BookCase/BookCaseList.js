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
    FlatList
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';
import AppUtils from '../../Utils/AppUtils'
import GlobleVar from '../../Globle/GlobleVar'
export default class BookCaseList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        // let modelSubViews = [];
        // let sourse = ['总排行榜', '月排行榜', '总收藏榜', '总完结榜', '分类'];
        // for (var i in sourse) {
        //     modelSubViews.push(
        //         <TouchableOpacity activeOpacity={0.7}>
        //             <View style={styles.modelStyle} key={i}>
        //                 <Image source={require('../../pages/app_image/model_entry_model1.png')} style={styles.modelImageStyle}></Image>
        //                 <Text>{sourse[i]}</Text>
        //             </View>
        //         </TouchableOpacity>
        //     )
        // }
        let dataSource = [];
        for (var i = 0; i < 100; ++i) {
            dataSource.push({ key: '雷帮文' + i })
        }
        return (
            <View style={{ backgroundColor: '#ffffff' }}>
                <FlatList
                    data={dataSource}
                    renderItem={({ item }) => <Text>{item.key}</Text>}
                />
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