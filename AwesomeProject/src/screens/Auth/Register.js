import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, ImageBackground, StatusBar, TextInput, StyleSheet } from 'react-native';
import startTabs from '../MainTabs/startMainTabs';


const remote = 'https://s15.postimg.org/tw2qkvmcb/400px.png';

class RegisterScreen extends Component {

    loginHandler = () => {

        this.props.navigator.push({
            screen: "awesome-app.AuthScreen",
            navigatorStyle: {
                navBarHidden: true
            }
        });
    }

    render() {
        const resizeMode = 'center';
        const text = 'This is some text inlaid in an <Image />';

        return (
            //    <View style={{justifyContent: 'center', flex: 1}}>  
            <ImageBackground
                style={{
                    backgroundColor: '#ccc',
                    flex: 1,
                    flexDirection: 'column',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}
                source={require('../../assets/signup_background.png')}
            >
                <View
                    style={{
                        width: '100%',
                        marginTop: 200,
                        alignItems: 'center'
                    }}
                >

                    <View style={styles.SectionStyle}>

                        <Image source={require('../../assets/email.png')} style={styles.ImageStyle} />

                        <TextInput
                            style={{ flex: 1 }}
                            placeholder="Email"
                            underlineColorAndroid="transparent"
                            placeholderStyle={{ fontFamily: "Helvetica Neue", Color: '#989898' }}
                            placeholderTextColor='#989898'
                        />

                    </View>

                    <View style={styles.SectionStyle}>

                        <Image source={require('../../assets/password.png')} style={styles.ImageStyle} />

                        <TextInput
                            secureTextEntry={true}
                            style={{ flex: 1 }}
                            placeholder="Password"
                            underlineColorAndroid="transparent"
                            placeholderStyle={{ fontFamily: "Helvetica Neue" }}
                            placeholderTextColor='#989898'
                        />

                    </View>

                    <View style={styles.SectionStyle}>

                        <Image source={require('../../assets/password.png')} style={styles.ImageStyle} />

                        <TextInput
                            style={{ flex: 1 }}
                            secureTextEntry={true}
                            placeholder="Confirm Password"
                            underlineColorAndroid="transparent"
                            placeholderStyle={{ fontFamily: "Helvetica Neue" }}
                            placeholderTextColor='#989898'
                        />

                    </View>



                    <View style={styles.textStyle}>

                        <Text style={styles.sign_up_text}>
                            By clicking "SIGN UP" I agree to
                         </Text>

                        <Text style={styles.terms_and_condition_text}>
                            Terms of Service
                        </Text>

                    </View>

                    <TouchableHighlight
                        style={styles.signup}
                        onPress={this.loginHandler}
                    >
                        <View style={styles.signup_view}>
                            <Text style={styles.signup_text}>
                                SIGN UP
            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </ImageBackground>
            //  </View>
        );
    }
}

export default RegisterScreen;

const styles = StyleSheet.create({



    SectionStyle: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#979797',
        height: 40,
        borderRadius: 4,
        width: '90%',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1
    },

    textStyle: {
        marginTop: 15,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',


    },


    ImageStyle: {
        padding: 10,
        margin: 10,
        height: 14,
        width: 10,
        resizeMode: 'stretch',
        alignItems: 'center'
    },

    signup: {
        marginTop: 15,
        height: 40,
        width: '90%',
        borderRadius: 20,
        backgroundColor: '#007191'
    },
    signup_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    signup_text: {

        color: '#FFFFFF',
        textAlign: 'center',
        fontFamily: "Helvetica Neue",
        fontSize: 18
    },

    sign_up_text: {
        flex: 4,
        marginTop: 10,
        height: 16,
        color: '#000000',
        fontFamily: "Helvetica Neue",
        fontSize: 15,
        lineHeight: 15,
        textAlign: 'left'
    },
    terms_and_condition_text: {
        flex: 2,
        marginTop: 10,
        height: 15,
        color: '#007191',
        fontFamily: "Helvetica Neue",
        fontSize: 14,
        lineHeight: 14,
        textAlign: 'left'
    }
})