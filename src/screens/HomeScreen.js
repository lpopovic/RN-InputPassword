import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import PasswordInput from '../components/PasswordInput'

export default class HomeScreen extends Component {

    constructor() {
        super();
        //Initialise  
        this.state = {
            password: ''
        }
    }

    render() {
        const { password } = this.state
        return (
            <View style={styles.mainContainer}>
                    <PasswordInput
                        style={styles.passwordInput}
                        text={password}
                        onChangeText={(text) => this.setState({
                            password: text
                        })} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white'

    },
    passwordInput: {
        marginHorizontal: 16
    }
});
