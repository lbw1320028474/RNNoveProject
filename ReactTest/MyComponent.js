
import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

export default class MyComponent extends Component {

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
  }

  render() {
    return (
      <Text>这是自定义的组件</Text>
    )
  }
}
