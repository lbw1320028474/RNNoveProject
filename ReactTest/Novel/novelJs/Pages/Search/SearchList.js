import React, { Component } from 'react';
import {
    Image,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList
} from 'react-native';
import Dpi from '../../Utils/Dpi'
import GlobleKey from '../../Globle/GlobleKey'
import GlobleVar from '../../Globle/GlobleVar'
import AppUtils from '../../Utils/AppUtils'
import ThemesManager from '../../Themes/ThemesManager'
import HDivideLine from '../../Views/HDivideLine'
import { Bars } from 'react-native-loader';
export default class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.topActionBarRef = null;
        this.state = {
            renderPlaceholderOnly: true,
        };
        this.timer = null;
    }

    componentDidMount() {
        let that = this;
        // this.timer = setTimeout(function () {
        //     that.setState({ renderPlaceholderOnly: false });
        // }, 2000);
        InteractionManager.runAfterInteractions(() => {
            this.setState({ renderPlaceholderOnly: false });
        });
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.renderPlaceholderOnly !== nextState.renderPlaceholderOnly) {
            return true;
        } else {
            return false;
        }
    }

    _renderView(that) {
        return (
            <View>
                <FlatList
                    data={[{ title: 'Title Text', key: 'item1' }]}
                    renderItem={({ item, separators }) => (
                        <TouchableHighlight
                            onPress={() => this._onPress(item)}
                            onShowUnderlay={separators.highlight}
                            onHideUnderlay={separators.unhighlight}>
                            <View style={{ backgroundColor: 'white' }}>
                                <Text>{item.title}}</Text>
                            </View>
                        </TouchableHighlight>
                    )}
                />
            </View>
        )
    }

    _renderItemView(data) {

    }

    render() {
        let that = this;
        return (
            <View>

            </View >
        )
    }
}


var viewStyle = StyleSheet.create({

})
