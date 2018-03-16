import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';

const MainViewButton = props => (
    <TouchableHighlight
        style={styles.main_button}
        onPress={props.action}
    >
        <View style={styles.container}>

            <Image source={props.placeImage} style={styles.ImageStyle} />
            <Text style={styles.titleText}>
                {props.placeName}
            </Text>
        </View>
    </TouchableHighlight>
);

export default MainViewButton;
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
    main_button: {

        height: '100%',
        width: '100%',

        backgroundColor: 'transparent'
    },


})