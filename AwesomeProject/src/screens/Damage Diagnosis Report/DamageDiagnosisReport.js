import React, { Component } from 'react';
import { View, Text, ScrollView, AlertIOS, Dimensions, Platform, Button, Image, TouchableHighlight, ImageBackground, StatusBar, TextInput, StyleSheet, Dimentions } from 'react-native';
import MyStatusBar from '../../components/StatusBar/MyStatusBar';
import DynamicList from '../../components/DynamicList/DynamicList';
import TextFields from '../../components/TextFields/TextFields';
import Icon from 'react-native-vector-icons/Ionicons';

var deviceWidth = Dimensions.get('window').width;
class DamageDiagnosisReport extends Component {
    startRepairDescription = () => {

        this.props.navigator.push({
            screen: "awesome-app.RepairDescription",
            navigatorStyle: {
                navBarHidden: false
            },
            title: "Repair Description"

        });
    }
    state = {
        orientation: "portrait"
    }

    constructor(props) {
        super(props);
        Dimensions.addEventListener("change", (dims) => {
            this.setState({
                orientation: Dimensions.get("window").height >= 500 ? "portrait" : "landscape"
            })
        });
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

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
    // constructor(props) {
    //     super(props);
    //     // if you want to listen on navigator events, set this up
    //     this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    // }
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
    // mainScreenHandler = () => {

    //     this.props.navigator.push({
    //         screen: "awesome-app.MainScreen",
    //         navigatorStyle: {
    //             navBarHidden: true
    //         },


    //     });
    // }
    render() {

        if (this.state.orientation === "portrait") {
            return (
                //    <View style={{justifyContent: 'center', flex: 1}}> 


                <View style={{ flex: 1, backgroundColor: 'white' }}>

                    <MyStatusBar backgroundColor="#000000" barStyle="light-content" />
                    <ImageBackground
                        style={styles.backgroundStyle}
                        source={require('../../assets/profileBG.png')}
                    >

                        <View
                            style={{ marginTop: '10%' }}
                        >
                            <TextFields placeholder="Registration Number" />
                        </View>
                        <TextFields color='black' placeIcon="ios-calendar" placeholder="Date when damage occured" />

                        <TextFields placeholder="Present mileage when damage occured" />

                        <TextFields color='black' placeIcon="ios-calendar" placeholder="Date of Last Service" />

                        <TextFields placeholder="Mileage Last Service" />

                        <TextFields placeholder="Discription of Damage" />

                        <TextFields placeholder="Workshop Diagnosis" />

                        <View style={[styles.SectionStyle, { marginTop: '5%' }]}>
                            <Icon style={styles.ImageStyle} name="ios-camera-outline" size={40} color='black' />
                            <Text style={{ flex: 1, fontSize: 18, marginLeft: 5, color: 'black' }} >
                                Upload Image and Files
                        </Text>

                        </View>
                        <View style={[styles.ImageSectionStyle, { justifyContent: 'flex-start' }]}>
                            <View
                                style={{ width: '10%', height: '100%', backgroundColor: 'white', marginRight: 10 }}
                            >
                                <Image style={{ width: '100%', height: '100%' }} source={require('../../assets/main.png')} />
                            </View>
                            <View
                                style={{ width: '10%', height: '100%', backgroundColor: 'white', marginRight: 10 }}
                            />
                            <View
                                style={{ width: '10%', height: '100%', backgroundColor: 'white', marginRight: 10 }}
                            />
                        </View>

                        <TouchableHighlight
                            style={styles.next}
                            onPress={this.startRepairDescription}
                        >
                            <View style={styles.next_view}>
                                <Text style={styles.next_text}>
                                    Next
                            </Text>
                            </View>
                        </TouchableHighlight>

                    </ImageBackground>
                </View >

            );
        }

        if (this.state.orientation === "landscape") {
            return (
                <View style={{ flex: 1, backgroundColor: 'white' }}>

                    <MyStatusBar backgroundColor="#000000" barStyle="light-content" />
                    <ImageBackground
                        style={styles.backgroundStyle}
                        source={require('../../assets/profileBG.png')}
                    >
                    </ImageBackground>
                </View >
            );
        }
    }

}

export default DamageDiagnosisReport;

const styles = StyleSheet.create({

    backgroundStyle: {
        resizeMode: 'cover',
        backgroundColor: '#ccc',
        flex: 1,
        flexDirection: 'column',

        justifyContent: 'flex-start',
        alignItems: 'center'
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
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        height: '5%',
        width: '90%',

    },
    ImageSectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        height: '5%',
        width: '90%',

    },
    ImageStyle: {
        color: 'black',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    next: {
        marginTop: 15,
        height: '8%',
        width: '30%',
        borderRadius: 30,
        backgroundColor: '#007191'
    },
    next_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    next_text: {

        color: '#FFFFFF',
        textAlign: 'center',
        fontFamily: "Helvetica Neue",
        fontSize: 18
    },


})