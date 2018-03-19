import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ContactsFields = props => (

    <View style={styles.container}>
        <Icon style={[styles.IconStyle, { color: props.color }]} name={props.placeIcon} size={20} color='black' />
        <Text style={[styles.titleText, { color: props.color }]}>
            {props.placeName}
        </Text>
    </View>

);

export default ContactsFields;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
    },

    titleText: {
        marginLeft: 10,
        fontSize: 15,

    },
    IconStyle: {
        alignItems: 'flex-start'
    },

})