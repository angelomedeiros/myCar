import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Main from './src/main'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Main {...this.props}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
