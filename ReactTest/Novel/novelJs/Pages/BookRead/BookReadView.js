import React, { Component } from 'react';
import {
    Image, View, Text, Button, StatusBar, StyleSheet,
    TouchableOpacity,
    ScrollView,
    ListView,
    FlatList
} from 'react-native';
import AppUtils from '../../Utils/AppUtils'
import GlobleView from '../../Globle/GlobleView'
import Dpi from '../../Utils/Dpi'
import EventBus from '../../Utils/EventBus'
import GlobleKey from '../../Globle/GlobleKey'
import BookReadSetting from './BookReadSetting'
import BottomToolView from './BottomToolView'

export default class BookReadView extends Component {
    constructor(props) {
        super(props);
        // this.state = { isVisiable: false }
        // var that = this;
        // this.eventListener = function () {
        //     if (that.state.isVisiable) {
        //         that.setState({ isVisiable: false })
        //     } else {
        //         that.setState({ isVisiable: true })
        //     }
        // }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // if (this.state.isVisiable != nextState.isVisiable) {
        //     return true;
        // } else {
        //     return false;
        // }
    }

    componentDidMount() {
        // EventBus.addListener(GlobleKey.KEY_READPAGE_CLICK_EVENT, this.eventListener);
    }
    render() {
        let that = this;
        let data = [];
        for (var i = 0; i < 100; ++i) {
            data.push(
                { data: i, key: i }
            )
        }
        return (
            <View style={viewStyle.containerStyle}>
                <ScrollView>
                    <Text style={{ fontSize: Dpi.s(40), padding: Dpi.d(30) }} onPress={(event) => {
                        EventBus.emit(GlobleKey.KEY_READPAGE_TO_READMORESETTING_EVENT);
                        EventBus.emit(GlobleKey.KEY_READPAGE_CLICK_EVENT);
                    }}>“今晚你要是再敢跑，小心我打断你的腿！”封行朗冷冽一声，便端着封立昕的早餐上楼去。{'\n'}    目送着男人挺拔的背影，雪落欲哭无泪:真是个轻浮又粗暴的男人！{'\n'}    其实昨晚自己从婚房里逃跑出来，雪落还是有些内疚的。但她真心做不到跟‘封立昕’去亲近。她唯一能够劝服自己去做的，就是照顾好他。{'\n'}    厨房里，雪落帮着安婶收拾着榨汁机。{'\n'}    “太太，是不是心里难过了？我家二少爷就那臭脾气，可心好着呢。每天都给我家大少爷喂饭喂药，是个重情重义的好弟弟。”安婶帮着封行朗说着好话。{'\n'}    其实雪落也看出来了:封行朗对他哥哥封立昕是真好。他们兄弟俩的感情应该很深厚。{'\n'}    “安婶，我想问:封立昕他怎么不去做整容手术啊？”雪落忍不住的问。因为以封家的财力，应该不成问题的。{'\n'}    可安婶却长长的叹息一声，还忍不住的抹了一把眼泪，“我家大少爷伤得太重了。现在正竭尽全力的保他的命呢。哪里还有精力去做植皮整容手术啊。”{'\n'}    安婶是情难自控的有感而发。可雪落却微微疑惑起来:因为昨晚的那个封立昕，怎么看怎么不像伤得太重的样子。因为他能起身，能走路，扣着她手腕的时候，臂膀相当有力。{'\n'}    似乎意识到自己失态了，安婶连忙抹去眼泪叮嘱着雪落，“太太啊，我家大少爷病情的事儿，你千万不要跟我家二少爷说啊！我家二少爷会崩溃的！因为我家大少爷是为了救二少爷而受的伤。”{'\n'}    雪落点了点头，“我知道的。”{'\n'}    “太太啊，你要尽量的多多包容我家二少爷。自从大少爷出事后，他的脾气一直不好，你一定要多多担待他啊！”安婶动之以情的说道。{'\n'}    因为这也是大少爷封立昕非逼着封行朗娶妻的用意所在。他想给他找个新的精神寄托。{'\n'}    雪落只是默默的点了点头，却不能作答安婶什么。因为那个封行朗，实在是太可恶了。初次见面就说她这个嫂子春心荡漾，这是他一个小叔子能说的吗？一点儿都不尊重她这个嫂子！{'\n'}    今天是新娘回门的日子。{'\n'}    豪门之家，礼节不能少。安婶给雪落准备了很多补品，还有一些做工精良的艺术装饰品。</Text>
                </ScrollView>
            </View>
        )

    }
}

var viewStyle = StyleSheet.create({
    containerStyle: {
        width: AppUtils.size.width,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: AppUtils.size.height,
        backgroundColor: '#ffffff'
    },
    // scrollViewSytle: {
    //     flex: 1,
    //     borderRadius: 7,
    //     borderColor: 'gray',
    //     marginHorizontal: 20,
    //     flexDirection: 'column',
    //     borderWidth: AppUtils.pixel,
    //     height: 40,
    // },
    // httpUrlStyle: {
    //     textAlignVertical: 'center',
    //     height: 40,
    // },
    // toWebIcon: {
    //     width: 30,
    //     height: 30,
    // }
})