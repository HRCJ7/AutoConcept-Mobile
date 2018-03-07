import React,{Component} from 'react';
import {View,Text,Button}  from 'react-native';
import startTabs from '../MainTabs/startMainTabs'

class AuthScreen extends Component{
loginHandle = () =>{
    startTabs();
}
    render(){
        return(
            <View>
                <Text>Auth Screen</Text>
                <Button title="Login" onPress={this.loginHandle}/>
            </View>
        );
    }
}
export default AuthScreen;