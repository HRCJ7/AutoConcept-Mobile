import React, { Component } from 'react';
import { View, Text, AlertIOS, Dimensions, Platform, Button, Image, TouchableHighlight, ImageBackground, StatusBar, TextInput, StyleSheet } from 'react-native';
import MyStatusBar from '../../components/StatusBar/MyStatusBar';
import ContactsFields from '../../components/ContactsFields/ContactsFields';


var deviceWidth = Dimensions.get('window').width;
class Profile extends Component {

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
    static navigatorButtons = {
        rightButtons: [
            {
                iconColor: 'black',
                icon: require('../../assets/edit.png'), // for icon button, provide the local image asset name
                id: 'edit' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
            }
        ]
    };
    constructor(props) {
        super(props);
        // if you want to listen on navigator events, set this up
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }
    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
        if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
            if (event.id == 'edit') { // this is the same id field from the static navigatorButtons definition
                AlertIOS.alert('NavBar', 'Edit button pressed');
            }
        }
    }

    render() {



        return (
            //    <View style={{justifyContent: 'center', flex: 1}}> 
            <View style={{ flex: 1 }}>
                <MyStatusBar backgroundColor="#000000" barStyle="light-content" />
                <ImageBackground
                    style={styles.backgroundStyle}
                    source={require('../../assets/profileBG.png')}
                >
                    <Image style={styles.image} source={{ uri: 'https://raw.githubusercontent.com/Infernus101/ProfileUI/0690f5e61a9f7af02c30342d4d6414a630de47fc/icon.png' }} />

                    <Text style={styles.nameText} >
                        Repair Company
                    </Text>
                    <Text style={styles.emailText} >
                        center@auto.com
                    </Text>
                    <Text style={styles.descriptiveText} >
                        Car repair and maintenance in
                    </Text>
                    <ContactsFields placeIcon="ios-pin" placeName="Uddelvalla, Sweden" color='white' />
                </ImageBackground>
            </View >
        );
    }
}

export default Profile;

const styles = StyleSheet.create({
    image: {
        marginTop: '40%',
        height: 150,
        borderRadius: 50,
        width: 150
    },
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
    },
    nameText: {


        textAlign: 'center',

        width: '80%',
        color: '#FFFFFF',
        fontFamily: "Helvetica Neue",
        fontSize: 40,
        fontWeight: "200",

    },
    emailText: {


        textAlign: 'center',

        width: '80%',
        color: '#FFFFFF',
        fontFamily: "Helvetica Neue",
        fontSize: 14,
        fontWeight: "300"
    },
    descriptiveText: {


        textAlign: 'center',

        width: '80%',
        color: '#FFFFFF',
        fontFamily: "Helvetica Neue",
        fontSize: 18,
        fontWeight: "300"
    }
})