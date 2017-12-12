import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';


export default class BookCasePage extends Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;

    }
    render() {
        return (
            <View>
                <Text>BookCasePage</Text>
            </View>
        )
    }
}