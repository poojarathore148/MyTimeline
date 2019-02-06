import React, {Component} from 'react';
import { StyleSheet, Text, View,Image,ScrollView,FlatList,TouchableHighlight ,Alert} from 'react-native';

export default class Demo extends Component {
  onPress(){
    Alert.alert('Area Pressed')
  }
    state={
        dataSource:[
            {
    imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1J-pQn7dBacOdSa0F9Cn070SPMkT4-H1e9Em5lrgK1ERxydUiVA'
      
    } ,
    {
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY6rq56ygT4oujJTq3FXe8l3LrHLQohMybdSNpIzVZ1Rzl9ySo3Q'
              
      } ,
      {
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR5WpVYguhc1N6p2THuEaUXjWygNo4qNZK5dcVVNG-87Q587QEgQ'
              
      } ,
      {
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQZKFZ4bwhNyXWBUS3cExAdaJPpaxpkDRw9HHBC_TM9bsT_vkb'
              
      } 
]
           

        }
    
    render() {
        return(
            
    <ScrollView style={{flex:1}}>
<FlatList
  data={this.state.dataSource}
  renderItem={({item}) => <View>
      <Image style={{height:150,width:380,margin:15}} source={{uri:item.imageUrl}}/>
   <View style = {styles.overlay}>

    <TouchableHighlight onPress={this.onPress}>
    <Image style = {styles.logo} source = {require('./Image/luggage.png')} /></TouchableHighlight>
    <TouchableHighlight onPress={this.onPress}>
    <Image style = {styles.logo} source = {require('./Image/in-love.png')} /></TouchableHighlight>
    <TouchableHighlight onPress={this.onPress}>
    <Image style = {styles.logo} source = {require('./Image/novel.png')} /></TouchableHighlight>
    <TouchableHighlight onPress={this.onPress}>
    <Image style = {styles.logo} source = {require('./Image/ok-hand.png')} /></TouchableHighlight> 
  </View>
  </View>
        }  />
   </ScrollView>)
  }}

  const styles = StyleSheet.create({
    backgroundContainer: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    container: {
      flex: 1,
      alignItems: 'center',
    },
    overlay: {
      opacity: 5.5,
      backgroundColor: 'white',
      flexDirection:'row'
    },
    logo: {
      backgroundColor: 'white',
      width: 20,
      height: 20,
      marginLeft:60
    },
    backdrop: {
      flex:1,
      flexDirection: 'column'
    },
    buttonContainer: {
      margin: 120
    },
    headline: {
      fontSize: 18,
      textAlign: 'center',
      backgroundColor: 'black',
      color: 'white'
    }
});