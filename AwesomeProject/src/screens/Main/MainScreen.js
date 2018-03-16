import React, { Component } from 'react';
import { View, Text, Dimensions, Platform, Button, Image, TouchableHighlight, ImageBackground, StatusBar, TextInput, StyleSheet } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import MainViewButton from '../../components/MainViewButton/MainViewButton'
import MyStatusBar from '../../components/StatusBar/MyStatusBar'

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
var deviceWidth = Dimensions.get('window').width;
class MainScreen extends Component {

    contactsHandler = () => {

        this.props.navigator.push({
            screen: "awesome-app.Contatcs",
            navigatorStyle: {
                navBarHidden: false
            },
            title: "Contact"

        });
    }

    render() {

        let data = [{
            value: 'English',
        }, {
            value: 'Swedish',
        }, {
            value: 'French',
        }];

        return (
            //    <View style={{justifyContent: 'center', flex: 1}}> 
            <View style={{ flex: 1 }}>
                <MyStatusBar backgroundColor="#000000" barStyle="light-content" />

                <View style={styles.appBar} >
                    <ModalDropdown style={styles.dropdown_1}
                        textStyle={styles.dropdown_2_text}
                        defaultValue="Language"
                        options={['English', 'Swedish']} />
                </View>




                <ImageBackground
                    style={{
                        resizeMode: 'cover',
                        backgroundColor: '#ccc',
                        flex: 1,
                        flexDirection: 'column',

                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}
                    source={require('../../assets/main.png')}
                >
                    <View
                        style={{
                            marginTop: '70%',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '60%',
                            height: deviceWidth * 0.6 / 2,
                            backgroundColor: 'transparent',
                            borderBottomWidth: 2,
                            borderColor: 'white'
                        }}
                    >
                        <View
                            style={{
                                width: '50%',
                                height: '100%',
                                borderRightWidth: 2,
                                borderColor: 'white',
                                backgroundColor: 'transparent',
                            }}>
                            <MainViewButton placeImage={require('../../assets/add_items.png')} placeName="Add Items" />
                        </View>
                        <View
                            style={{
                                width: '50%',
                                height: '100%',
                                backgroundColor: 'transparent',
                            }} >
                            <MainViewButton placeImage={require('../../assets/list_items.png')} placeName="Claim List" />
                        </View>
                    </View>
                    <View
                        style={{

                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '60%',
                            height: deviceWidth * 0.6 / 2,
                            backgroundColor: 'transparent',

                        }}
                    >
                        <View
                            style={{
                                width: '50%',
                                height: '100%',
                                borderRightWidth: 2,
                                borderColor: 'white',
                                backgroundColor: 'transparent',
                            }}>
                            <MainViewButton placeImage={require('../../assets/profile.png')} placeName="Profile" />
                        </View>
                        <View
                            style={{
                                width: '50%',
                                height: '100%',
                                backgroundColor: 'transparent',
                            }} >
                            <MainViewButton action={this.contactsHandler} placeImage={require('../../assets/contacts.png')} placeName="Contacts" />
                        </View>
                    </View>
                </ImageBackground>
            </View >
        );
    }
}

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'

    },
    ImageStyle: {

        height: 50,
        width: 50,
        resizeMode: 'stretch',
        alignItems: 'center'
    },
    appBar: {
        alignItems: 'flex-end',
        backgroundColor: '#007191',
        height: APPBAR_HEIGHT,
    },
    dropdown_1: {
        flex: 1,
        justifyContent: 'center',
        marginRight: 10

    },
    dropdown_2_text: {
        marginVertical: 10,
        marginHorizontal: 6,
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
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
    label: {
        color: 'black'
    },
    CheckBox: {
        height: 15,
        width: 15,
        borderColor: '#979797',
        borderWidth: 1,
        backgroundColor: '#D8D8D8'

    },
    main_button: {

        height: '100%',
        width: '100%',

        backgroundColor: 'transparent'
    },
    signin_view: {

        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'

    },
    signin_text: {

        color: '#FFFFFF',
        textAlign: 'center',
        fontFamily: "Helvetica Neue",
        fontSize: 18
    },
    forget_your_password: {
        marginTop: 10,
        height: 15,
        width: '90%',
        color: '#007191',
        fontFamily: "Helvetica Neue",
        fontSize: 14,
        lineHeight: 14,
        textAlign: 'left',
        textDecorationLine: 'underline'
    },
    create_account: {
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        height: 43,
        width: '100%',
        opacity: 0.54,
        backgroundColor: '#007191'
    }
})