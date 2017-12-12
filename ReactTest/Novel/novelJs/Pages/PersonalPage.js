import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';


export default class PersonalPage extends Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }
    render() {
        return (
            <View>
                <Text>PersonalPage</Text>
            </View>
        )
    }
}