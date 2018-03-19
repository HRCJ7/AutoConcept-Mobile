import React, { Component } from 'react';
import { View, Text, Dimensions, Platform, Button, Image, TouchableHighlight, ImageBackground, StatusBar, TextInput, StyleSheet } from 'react-native';
import MyStatusBar from '../../components/StatusBar/MyStatusBar';
import ContactsFields from '../../components/ContactsFields/ContactsFields';


var deviceWidth = Dimensions.get('window').width;
class Contacts extends Component {

    static navigatorStyle = {

        //General
        statusBarTextColorScheme: 'dark',
        drawUnderNavBar: true,
        navBarTranslucent: true,
        navBarTransparent: true,
        navBarTextColor: '#007191',
        navBarTextFontSize: 22,
        navBarButtonColor: '#007191',
        navBarBackgroundColor: 'transparent',
        navBarNoBorder: true,

        //iOS

        //Android

        navigationBarColor: 'transparent',
        drawUnderStatusBar: true,
        navBarTopPadding: 24,
        statusBarColor: '#000000',


    }

    render() {



        return (
            //    <View style={{justifyContent: 'center', flex: 1}}> 
            <View style={{ flex: 1 }}>
                <MyStatusBar backgroundColor="#000000" barStyle="light-content" />
                <ImageBackground
                    style={styles.backgroundStyle}
                    source={require('../../assets/signup_background.png')}
                >
                    <View
                        style={[styles.contactText, { marginTop: '60%' }]}
                    >
                        <ContactsFields color='black' placeIcon="ios-home" placeName="Smörhålevägen 3, 434 42 Kungsbacka" />
                    </View>
                    <View
                        style={styles.contactText}
                    >
                        <ContactsFields color='black' placeIcon="ios-at" placeName="info@autoconcept.se" />
                    </View>
                    <View
                        style={styles.contactText}
                    >
                        <ContactsFields color='black' placeIcon="ios-call" placeName="+46 300 52 10 00" />
                    </View>
                </ImageBackground>
            </View >
        );
    }
}

export default Contacts;

const styles = StyleSheet.create({

    contactText: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: deviceWidth * 0.1,
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        borderColor: 'black'
    },
    backgroundStyle: {
        resizeMode: 'cover',
        backgroundColor: '#ccc',
        flex: 1,
        flexDirection: 'column',

        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})