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
import Dpi from '../../Utils/Dpi'
// modelSubViews.push(
//     <TouchableOpacity activeOpacity={0.7} key={i} onPress={(event) => { this._modelPress.bind(this, j) }}>
//         <View style={styles.modelStyle} >
//             <Image source={{ uri: sourse[j].moderIcon }} style={styles.modelImageStyle}></Image>
//             <Text>{sourse[j].moderName}</Text>
//         </View>
//     </TouchableOpacity>
// )
export default class ModelEntryView extends Component {

    constructor(props) {
        super(props);
        this._modelPress = this._modelPress.bind(this);


    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;

    }
    render() {
        let that = this;
        let modelSubViews = [];
        let sourse = this.props.dataParams;
        let j = 0;
        for (var i in sourse) {
            if (j == 0) {
                modelSubViews.push(
                    <TouchableOpacity activeOpacity={0.7} key={i} onPress={(event) => { this._modelPress.bind(this, j) }}>
                        <View style={styles.modelStyle} >
                            <Image source={require('../../../novelResource/model_entry_main_rank.png')} style={styles.modelImageStyle}></Image>
                            <Text>{sourse[j].moderName}</Text>
                        </View>
                    </TouchableOpacity>
                )
            } else if (j == 1) {
                modelSubViews.push(
                    <TouchableOpacity activeOpacity={0.7} key={i} onPress={(event) => { this._modelPress.bind(this, j) }}>
                        <View style={styles.modelStyle} >
                            <Image source={require('../../../novelResource/model_entry_rank.png')} style={styles.modelImageStyle}></Image>
                            <Text>{sourse[j].moderName}</Text>
                        </View>
                    </TouchableOpacity>
                )
            } else if (j == 2) {
                modelSubViews.push(
                    <TouchableOpacity activeOpacity={0.7} key={i} onPress={(event) => { this._modelPress.bind(this, j) }}>
                        <View style={styles.modelStyle} >
                            <Image source={require('../../../novelResource/model_entry_favoraty.png')} style={styles.modelImageStyle}></Image>
                            <Text>{sourse[j].moderName}</Text>
                        </View>
                    </TouchableOpacity>
                )
            } else if (j == 3) {
                modelSubViews.push(
                    <TouchableOpacity activeOpacity={0.7} key={i} onPress={(event) => { this._modelPress.bind(this, j) }}>
                        <View style={styles.modelStyle} >
                            <Image source={require('../../../novelResource/model_entry_over.png')} style={styles.modelImageStyle}></Image>
                            <Text>{sourse[j].moderName}</Text>
                        </View>
                    </TouchableOpacity>
                )
            } else if (j == 4) {
                modelSubViews.push(
                    <TouchableOpacity activeOpacity={0.7} key={i} onPress={(event) => { this._modelPress.bind(this, j) }}>
                        <View style={styles.modelStyle} >
                            <Image source={require('../../../novelResource/model_entry_type.png')} style={styles.modelImageStyle}></Image>
                            <Text>{sourse[j].moderName}</Text>
                        </View>
                    </TouchableOpacity>
                )
            }
            j += 1;
        }
        return (
            <View style={styles.containerStyle}>
                {modelSubViews}
            </View>
        )
    }

    _modelPress(data) {
        alert(data);
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
        height: Dpi.d(82),
        width: Dpi.d(82),
    },
    modelTextStyle: {
        flexDirection: 'column',
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