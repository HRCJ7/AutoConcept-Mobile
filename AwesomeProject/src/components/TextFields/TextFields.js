import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TextFields = props => (



    <View style={[styles.SectionStyle, { marginTop: '5%' }]}>


        <TextInput

            style={{ flex: 1, marginLeft: 10 }}
            placeholder={props.placeholder}
            underlineColorAndroid="transparent"
            placeholderStyle={{ fontFamily: "Helvetica Neue" }}
            placeholderTextColor='#000000'
        />
        <Icon style={[styles.ImageStyle, { color: props.color }]} name={props.placeIcon} size={20} color='black' />
    </View>

);

export default TextFields;
const styles = StyleSheet.create({


    ImageStyle: {
        padding: 10,
        margin: 10,
        height: 36,
        width: 36,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    SectionStyle: {
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



})