import React,{Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import profileScreen from './profileScreen'

export default class MenuItem2 extends React.Component{
render(){
    return(
        
<View style={styles.overlayContainer}>

 <Image style = {styles.logo1} source ={this.props.logo} /><Text style={{fontSize:20,textAlign:'center'}}>{this.props.cate}</Text>

        </View>
    );
}

}
const styles = StyleSheet.create({
    // menuItem:{
    //  width:20,
    //  height: 20,
    //  flexDirection:"row",
    //  margin:20
    // },
    container: {
        padding: 30,
        marginTop: 20,
        flex: 1,
    },
    overlayContainer:{
        padding:10,
              borderColor:'#fff',
              borderWidth:1,
              height:50,
              width:320,
             textAlign:'center',
             alignItems:'center',
              borderRadius:10,
              margin:15,
              fontSize:50,
              backgroundColor:'white',
              elevation:20,
              flexDirection:"row",   
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
             marginLeft:10,
            marginRight:30,
            
          }
}
)