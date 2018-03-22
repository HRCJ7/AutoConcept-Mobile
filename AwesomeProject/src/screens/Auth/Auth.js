import React, { Component } from 'react';
import { View, Text, Button, ScrollView, Image, TouchableHighlight, ImageBackground, StatusBar, TextInput, StyleSheet } from 'react-native';
import startTabs from '../MainTabs/startMainTabs';
import CheckBox from 'react-native-checkbox';

const remote = 'https://s15.postimg.org/tw2qkvmcb/400px.png';

class AuthScreen extends Component {

  createAccountdHandler = () => {

    this.props.navigator.push({
      screen: "awesome-app.RegisterScreen",
      navigatorStyle: {
        navBarHidden: true
      }
    });
  }
  startMainScreenHandler = () => {

    this.props.navigator.push({
      screen: "awesome-app.MainScreen",
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
          //  position: 'absolute',
          //   width: '100%',
          //  height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        source={require('../../assets/signup_background.png')}
      >

        <View
          style={{
            width: '100%',
            marginTop: '25%',
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
          <View
            style={{
              marginTop: 15,
              width: '75%'
            }}
          >
            <CheckBox
              label='Remember me'
              checked={true}
              onChange={(checked) => console.log('I am checked', checked)}
              labelStyle={styles.label}
              checkboxStyle={styles.CheckBox}
            />
          </View>

          <TouchableHighlight
            style={styles.signin}
            onPress={this.startMainScreenHandler}
          >
            <View style={styles.signin_view}>
              <Text style={styles.signin_text}>
                SIGN IN
            </Text>
            </View>
          </TouchableHighlight>

          <Text style={styles.forget_your_password}>
            Forgot your password
           </Text>


        </View>

        <TouchableHighlight
          style={styles.create_account}
          onPress={this.createAccountdHandler}
        >
          <View style={styles.signin_view}>
            <Text style={styles.signin_text}>
              CREATE AN ACCOUNT
            </Text>
          </View>
        </TouchableHighlight>

      </ImageBackground >
      //  </View>
    );
  }
}

export default AuthScreen;

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

  ImageStyle: {
    padding: 10,
    margin: 10,
    height: 14,
    width: 10,
    resizeMode: 'stretch',
    alignItems: 'center'
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
  signin: {
    marginTop: 15,
    height: 40,
    width: '90%',
    borderRadius: 20,
    backgroundColor: '#007191'
  },
  signin_view: {
    flex: 1,
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