import React, {Component} from 'react';
import {Text,View,TextInput,Button,StyleSheet} from 'react-native';

export default class loginScreen extends Component {
    state={
mobileNumber:'',
password:'',
dataSource:''
}
handlePress=()=>{
    return fetch('http://192.168.0.16:8082/test/userLogin',{
     method:'POST',   headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
        },
        body:JSON.stringify({
            password:this.state.password,
            mobileNumber:this.state.mobileNumber
        })
    })
    .then((response)=>response.json())
    .then((responseJson)=>{this.setState({dataSource:responseJson.SUCCESS,}
        ,function(){

    });
})
.catch((error)=>{
    console.error(error);
});}
//     onChangeText(value){
// this.setState({
// textValue:value});}
// _onPressButton() {
//     Alert.alert('You tapped the button!')
//   }
    handleChange=(text)=>{
        this.setState({password:text});}

    handleChange1=(text)=>{
        this.setState({mobileNumber:text});
    }
    render() {
        return (
            <View style={styles.container}>
                
  <Text>MobileNumber</Text>
    <TextInput style={styles.overlayContainer}
          placeholder="MobileNumber"
          placeholderTextColor='blue'
onChangeText={this.handleChange}/>

    <Text>Password</Text>
    <TextInput style={styles.password}
    placeholder="Password"
    placeholderTextColor='blue'
    onChangeText={this.handleChange1}/>
    
    <View style={styles.buttonContainer}>
          <Button
            onPress={this.handlePress}
            title="Login"
          />
        </View>
     </View>
    
        );
}}
const styles = StyleSheet.create({
    container: {
        padding:80
  },
  overlayContainer:{
      borderColor:'red',
      borderWidth:1,
      height:38,
      width:250,
    //   alignItems:'center',
    //   margin: 40
    
     
  },
  buttonContainer: {
    marginRight: 10,
    margin: 20,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  password: {
    marginBottom:20,
    height:38,
      width:250,
      borderColor:'red',
      borderWidth:1,
      
  }
}
)
