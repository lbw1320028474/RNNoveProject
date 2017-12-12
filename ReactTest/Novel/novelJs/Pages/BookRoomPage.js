import React, { Component } from 'react';
import { View, Text, Button,StatusBar } from 'react-native';
import HomeTabView from './HomeTabView'

export default class BookRoomPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor="transparent"
                    barStyle="light-content"
                    translucent={true}
                />
                <Text>BookRoomPage</Text>
                <Button onPress={() => this.props.navigation.navigate('KEY_BookInfoPage')} title='跳转到详情页'></Button>
            </View>
        )
    }
}