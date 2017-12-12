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
export default class ViewPageTitle extends Component {

    constructor(props) {
        super(props);
    }
    //selectCallBack, selectedIndex, normaltabColor, selectedTabColor, textSize, tabIndexLineStyle
    render() {
        let that = this;
        let titleSubViews = [];
        let titles = ['主编力推-女生', '主编力推-男生', '女屏新书', '男屏新书', '主编力推-男生'];
        let j = 0;
        for (var i in titles) {
            titleSubViews.push(
                <TouchableOpacity activeOpacity={0.7} key={j} onPress={this.props.selectCallBack.bind(this, j)}>
                    <View style={styles.titleStyle} >
                        <Text style={{ fontSize: this.props.textSize, color: (j === this.props.selectedIndex) ? this.props.selectedTabColor : this.props.normaltabColor, }} >{titles[i]}</Text>
                    </View>
                </TouchableOpacity>
            )
            j += 1;
        }
        return (
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}>
                <View style={styles.containerStyle}>
                    <View style={styles.subcontainerStyle}>
                        {titleSubViews}
                    </View>
                </View>
            </ScrollView>
        )
    }
}

var styles = StyleSheet.create({
    containerStyle: {
        paddingTop: GlobleVar.SearchViewHeight,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    subcontainerStyle: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    titleStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
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