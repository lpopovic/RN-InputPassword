import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import HomeScreen from './src/screens/HomeScreen'

export default class App extends Component {

  render() {
    return (
      <View style={styles.mainContainer}>
        <HomeScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

});
