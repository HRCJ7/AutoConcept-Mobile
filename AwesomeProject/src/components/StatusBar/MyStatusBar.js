import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;


const MyStatusBar = ({ backgroundColor, ...props }) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
);

export default MyStatusBar;
const styles = StyleSheet.create({
    statusBar: {

        height: STATUSBAR_HEIGHT,
    },

})