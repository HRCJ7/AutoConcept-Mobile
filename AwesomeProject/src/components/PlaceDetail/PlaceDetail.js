import React from "react";
import {View, Image, Text, Button, StyleSheet,TouchableOpacity } from "react-native";

const placeDetail = props => {
  // let modalContent = null;

  // if (props.selectedPlace) {
  //   modalContent = (
  //     <View>
  //       <Image source={props.selectedPlace.image} style={styles.placeImage} />
  //       <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
  //     </View>
  //   );
  // }
  return (
    // <Modal
    //   onRequestClose={props.onModalClosed}
    //   visible={props.selectedPlace !== null}
    //   animationType="slide"
    // >
  <View style={styles.modalContainer}>
    <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
    </View>
  <View>
    <TouchableOpacity onPress={props.onItemDeleted}>
          <Text title="Delete" color="red" />
          
     </TouchableOpacity>
     </View>
     </View>

  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  }
});

export default placeDetail;
