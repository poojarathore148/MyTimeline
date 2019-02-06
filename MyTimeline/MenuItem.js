import React,{Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import profileScreen from './profileScreen'

export default class MenuItem extends React.Component{
render(){
    return(
<View style={styles.menuItem}>

 <Text style={styles.overlayContainer}><Image style = {styles.logo1} source ={this.props.logo} />{this.props.cate}</Text>

        </View>
    );
}

}
const styles = StyleSheet.create({
    menuItem:{
     width:20,
     height: 20,
     flexDirection:"row",
     margin:20
    },
    overlayContainer:{
        padding:10,
              borderColor:'#fff',
              borderWidth:1,
              height:50,
              width:300,
              textAlign: 'center',
              borderRadius:10,
              margin:10,
              fontSize:20,
              backgroundColor:'white',
              elevation:20,
              
              
             
          },
          Image: {
            width: 20,
            height: 20,
            opacity:0.8,
       marginRight:20,
       position: "absolute"
            
          },
          logo1:{
              width:20,
              height:20,
            
          }
}
)