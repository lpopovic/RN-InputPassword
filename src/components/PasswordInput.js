import React, { Component } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';
import {
    isAndroid,
    imagesAssets,
    strings,
    fontMontserratItalic
} from '../helpers'
class PasswordInput extends Component {
    constructor() {
        super();
        //Initialise  
        this.state = {
            hidePassword: true,
        }
        this.input = React.createRef();
    }

    componentDidMount() {
        this.setCustomFontForPasswordTextInput()

    }

    onPressSetPasswordVisibility = () => {
        this.setState({ hidePassword: !this.state.hidePassword });
        if (isAndroid) {
            this.setCustomFontForPasswordTextInput()
        }


    }

    setCustomFontForPasswordTextInput = () => {
        this.input.current.setNativeProps({
            style: {
                fontFamily: fontMontserratItalic
            }
        })
    }

    setVisibleButtonContent = (hidePassword) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.touachableButton}
                onPress={this.onPressSetPasswordVisibility}>
                <Image
                    source={(hidePassword) ? imagesAssets.hideIcon : imagesAssets.viewIcon}
                    style={styles.buttonImage} />
            </TouchableOpacity>
        )
    }

    render() {
        const { hidePassword } = this.state
        const { text } = this.props
        return (
            <View style={[styles.textBoxContainer,this.props.style]}>
                <TextInput
                    ref={this.input}
                    underlineColorAndroid="transparent"
                    secureTextEntry={hidePassword}
                    style={styles.textBox}
                    onChangeText={(text) => this.props.onChangeText(text)}
                    value={text}
                    placeholder={strings.password}
                    autoCapitalize="none"
                />
                {this.setVisibleButtonContent(hidePassword)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
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


export default PasswordInput;