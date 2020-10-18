import React, { Component } from 'react';
import { AppRegistry, View, Image, TouchableOpacity, TextInput, StyleSheet, Text } from 'react-native';

export default class App extends Component {

  constructor() {
    super();

    this.state = { hidePassword: true, password: '', copy: '' }
    //Initialise  
    this.input = React.createRef();
  }

  componentDidMount() {
    this.setCustomFontForPasswordTextInput()

  }
  setPasswordVisibility = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
    this.setCustomFontForPasswordTextInput()

  }

  setCustomFontForPasswordTextInput = () => {
    this.input.current.setNativeProps({
      style: {
        fontFamily: "Montserrat-Italic"
      }
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textBoxContainer}>
          <TextInput
            ref={this.input}
            underlineColorAndroid="transparent"
            secureTextEntry={this.state.hidePassword}
            style={styles.textBox}
            onChangeText={(text) => this.setState({ password: text })}
            value={this.state.password}
            placeholder={'Password'}
            autoCapitalize="none"
          />
          <TouchableOpacity activeOpacity={0.8} style={styles.touachableButton} onPress={this.setPasswordVisibility}>
            <Image source={(this.state.hidePassword) ? require('./images/hide.png') : require('./images/view.png')} style={styles.buttonImage} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",

    },
    headerText: {
      fontSize: 25,
      textAlign: "center",
      margin: 10,
      color: 'black',
      fontWeight: "bold"
    },
    textBoxContainer: {
      position: 'relative',
      alignSelf: 'stretch',
      justifyContent: 'center'
    },
    textBox: {
      fontSize: 20,
      alignSelf: 'stretch',
      height: 45,
      paddingRight: 45,
      paddingLeft: 8,
      borderWidth: 1,
      paddingVertical: 0,
      borderColor: 'grey',
      borderRadius: 5,
    },
    touachableButton: {
      position: 'absolute',
      right: 3,
      height: 40,
      width: 35,
      padding: 2
    },
    buttonImage: {
      resizeMode: 'contain',
      height: '100%',
      width: '100%',
    }

  });
