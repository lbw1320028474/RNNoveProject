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
import Dpi from '../../Utils/Dpi'
export default class BookListItem extends Component {

    constructor(props) {
        super(props);
        // this._itemClick = this._itemClick.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;

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

        return (
            <TouchableOpacity onPress={(event) => { this._itemClick(this.props.listText) }}>
                <View style={styles.containerStyle}>
                    <Image style={styles.bookCoverStyle} source={require('../../../novelResource/book_cover.jpeg')} />
                    <View style={styles.bookDesContentStyle}>
                        <Text style={styles.bookTitleStyle} numberOfLines={1}>冰火魔厨{this.props.listText}</Text>
                        <Text style={styles.bookDesStyle} numberOfLines={3}>年幼的融念冰随父前往冰神塔救母，谁知救母不成，父亲也陷落于冰神塔中，只有念冰得以身免。拿着父亲和母亲留给他的两颗宝石，在冰雪祭祀的追杀下，他跳入了湍急的天青河中。天意将他带到了桃花林中，在那里，他遇到了一个人，鬼厨查极。八年刻苦的锻炼，使他拥有了顶尖厨艺，但这时，查极却突然死了。临死前，查极告诉他一句话，八年练厨，八年悟厨，冰火同源，以魔入厨，以魔法入厨艺，一代魔厨走入了命运的轮回。从此，厨师的身份成了念冰最好的保护伞，他走遍大陆，固然是要提升自己的厨艺，但更重要的，却是修炼自己那传说中才出现过的冰火同源魔法。他能否为父母报仇，能否在茫茫大陆上寻找到自己的真爱，能否将厨艺提升到颠峰，一切都是未知的。</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    _itemClick(data) {
        //alert(data);
        this.props.navigation.navigate('KEY_BookInfoPage');
    }

}

var styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: GlobleVar.noverListItemHeight
    },
    bookCoverStyle: {
        marginLeft: 10,
        height: Dpi.d(200),
        width: Dpi.d(160),
    },
    bookDesContentStyle: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    bookTitleStyle: {
        paddingBottom: 15,
        fontSize: Dpi.s(30),
        color: '#262626',
    },
    bookDesStyle: {
        fontSize: Dpi.s(30),
        color: '#999999',
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