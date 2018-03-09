import React,{Component} from 'react';
import {View,Text,Button,Image,ImageBackground,StatusBar,TextInput,StyleSheet}  from 'react-native';
import startTabs from '../MainTabs/startMainTabs'

const remote = 'https://s15.postimg.org/tw2qkvmcb/400px.png';

class AuthScreen extends Component{

    render() {
        const resizeMode = 'center';
        const text = 'This is some text inlaid in an <Image />';
    
        return (
           
          <ImageBackground
            style={{
              backgroundColor: '#ccc',
              flex: 1,
              position: 'absolute',
              width: '100%',
              height: '100%',
              justifyContent: 'center',
            }}
            source={require('../../assets/signup_background.png')}
          >
          
          <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               />
          </ImageBackground>
        );
      }
    }
    
export default AuthScreen;

const styles = StyleSheet.create ({
    input: {
        
        margin: 15,
        height: 41,
        borderColor: '#979797',
        borderWidth: 1,
        borderRadius:4,
        backgroundColor:'#FFFFFF',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    }
 })