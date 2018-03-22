import React, { Component } from 'react';
import { View, Text, AlertIOS, Dimensions, Platform, Button, Image, TouchableHighlight, ImageBackground, StatusBar, TextInput, StyleSheet } from 'react-native';
import MyStatusBar from '../../components/StatusBar/MyStatusBar';
import DynamicList from '../../components/DynamicList/DynamicList';
class Claims extends Component {

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
                icon: require('../../assets/home.png'), // for icon button, provide the local image asset name
                id: 'home' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
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
            if (event.id == 'home') { // this is the same id field from the static navigatorButtons definition
                this.props.navigator.push({
                    screen: "awesome-app.MainScreen",
                    navigatorStyle: {
                        navBarHidden: true
                    },
                });
            }
        }
    }
    profileHandler = () => {

        this.props.navigator.push({
            screen: "awesome-app.DamageDiagnosisReport",
            navigatorStyle: {
                navBarHidden: false
            },
            title: "Damage Diagnosis Report"

        });
    }
    render() {



        return (
            //    <View style={{justifyContent: 'center', flex: 1}}> 
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <MyStatusBar backgroundColor="#000000" barStyle="light-content" />
                <ImageBackground
                    style={styles.backgroundStyle}
                    source={require('../../assets/claimBG.png')}
                />
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <DynamicList action={this.profileHandler} />
                </View>

            </View >
        );
    }
}

export default Claims;

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: '15%',
        height: '25%',
        backgroundColor: 'white',


        // justifyContent: 'center',
        // alignItems: 'center'
    }

})