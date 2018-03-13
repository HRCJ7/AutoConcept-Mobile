import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import RegisterScreen from './src/screens/Auth/Register';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import PlaceDetailsScreen from './src/components/PlaceDetail/PlaceDetail';

import configureStore from './src/store/configureStore';

const store = configureStore();

Navigation.registerComponent("awesome-app.RegisterScreen", () => RegisterScreen, store, Provider);
Navigation.registerComponent("awesome-app.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("awesome-app.PlaceDetailsScreen", () => PlaceDetailsScreen);
Navigation.registerComponent("awesome-app.FindPlaceScreen", () => FindPlaceScreen, store, Provider);
Navigation.registerComponent("awesome-app.SharePlaceScreen", () => SharePlaceScreen, store, Provider);

//Start App

Navigation.startSingleScreenApp({

  screen: {
    screen: "awesome-app.AuthScreen",
    navigatorStyle: {
      navBarHidden: true
    }
  }
});




























// import React, { Component } from "react";
// import { StyleSheet, View } from "react-native";
// import { connect } from "react-redux";
// import Login from "./src/components/Login/Login";

// import PlaceInput from "./src/components/PlaceInput/PlaceInput";
// import PlaceList from "./src/components/PlaceList/PlaceList";
// import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
// import {
//   addPlace,
//   deletePlace,
//   selectPlace,
//   deselectPlace
// } from "./src/store/actions/index";
// import SplashScreen from 'react-native-splash-screen';

// class App extends Component {
//   placeAddedHandler = placeName => {
//     this.props.onAddPlace(placeName);
//   };

//   placeDeletedHandler = () => {
//     this.props.onDeletePlace();
//   };

//   modalClosedHandler = () => {
//     this.props.onDeselectPlace();
//   };

//   placeSelectedHandler = key => {
//     this.props.onSelectPlace(key);
//   };

//   componentDidMount() {
//     // do stuff while splash screen is shown
//       // After having done stuff (such as async tasks) hide the splash screen
//       SplashScreen.hide();
//   }

//   render() {
//     return (
//       <View style={styles.container}>

//         <PlaceDetail
//           selectedPlace={this.props.selectedPlace}
//           onItemDeleted={this.placeDeletedHandler}
//           onModalClosed={this.modalClosedHandler}
//         />
//         <PlaceInput onPlaceAdded={this.placeAddedHandler} />
//         <PlaceList
//           places={this.props.places}
//           onItemSelected={this.placeSelectedHandler}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 26,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "flex-start"
//   }
// });

// const mapStateToProps = state => {
//   return {
//     places: state.places.places,
//     selectedPlace: state.places.selectedPlace
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddPlace: name => dispatch(addPlace(name)),
//     onDeletePlace: () => dispatch(deletePlace()),
//     onSelectPlace: key => dispatch(selectPlace(key)),
//     onDeselectPlace: () => dispatch(deselectPlace())
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
