/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,ImageBackground,Button,Alert,TouchableHighlight} from 'react-native';
// import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'rreact-native-navigation/';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    height:'100%'
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'red',
    // flexDirection: 'column',
      // justifyContent: 'center',
      // alignItems: 'center',
      // backgroundColor: 'grey',
      // height: 60,
      // fontSize:40,
      // textAlign: 'center',
  
  },
  overlayContainer:{
    flex:1,
    // width:'50',
    height:'1%'
    // backgroundColor:'blue'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'red',
  },
  instructions: {
    textAlign: 'center',
    color: 'blue',
    marginBottom: 5,
  },
  red:{
    color:'red',
    fontSize:30
  },
  buttonContainer: {
    margin: 120
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});


export default class App extends Component {
  
    // _onPressButton() {
    //   Alert.alert('You tapped the button!')
    // }
    // onPress(){
    //   Alert.alert('Area Pressed')
    // }
  
  render() {
    // let pic = {
    //   uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    // };
    return (
      // <Image source={pic} style={{width: 193, height: 110}}/>
      <ImageBackground
          source={require('./Image/hd_picture_of_the_beautiful_natural_scenery_03_166249.jpg')}
          
          style={styles.container}>
          <Image source={require('./Image/images.jpeg')}style={styles.overlayContainer}/>
          
          {/* <View stytle={styles.overlayContainer}>
          </View> */}
          
          </ImageBackground>
    // return (
    //   <View>
    //  <Image source={require('https://sample-videos.com/img/Sample-jpg-image-500kb.jpg')} />
        
           /* <View style={styles.container} >
        <TouchableHighlight
         style={styles.button}
         onPress={this.onPress}
        >
         <Text> Touch Here </Text>
        </TouchableHighlight>
           <View style = {styles.red} />
           </View>
           <Text style={styles.container}>Hey</Text>
           <TouchableHighlight style ={styles.welcome} onPress = {this.onPress} underlayColor="red">
           <Text> Touch Here </Text>
</TouchableHighlight>
           <Text style={styles.red}>Hello</Text>
           <Text style={styles.welcome}>Welcome</Text>
           <Text style={styles.instructions}>Welcome</Text>
           <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="This looks great!"
          />
          <Button
            onPress={this._onPressButton}
            title="OK!"
            color="#841584"
          />
        </View>
           <Button
  onPress={() => {
    Alert.alert('You tapped the button!');
  }}
  title="Press Me"
/> */
      // </View>
     
    );
  }
}
// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
//   Details: {
//     screen: DetailsScreen,
//   },
// }, {
//     initialRouteName: 'Home',
// });




