import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ImageBackground, Button, TextInput, Alert, TouchableHighlight } from 'react-native';
import MenuItem from './MenuItem';

export default class profileScreen extends Component {
    render() {
        return (

            <View style={styles.overlay}>
                <View style={{ height: 150, backgroundColor: 'black', }} />
                
                <Image style={{ position: "absolute", height: 20, width: 20, backgroundColor: 'black', margin: 10 }} source={require('./Image/back.png')} />
                
                <Image style={{ width: '30%', height: 100, borderRadius: 20, marginLeft: 140, marginTop: 100, position: "absolute", justifyContent: "center", alignItems: "center" }}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1J-pQn7dBacOdSa0F9Cn070SPMkT4-H1e9Em5lrgK1ERxydUiVA' }}
                />

                <View style={styles.container}>
                    <Text style={styles.name} >Beatrice Colon</Text>
                    <Text style={{ textAlign: 'center', marginBottom: 20 }} >24, Female</Text>
              
               <MenuItem  logo={require('./Image/bag.png')} cate="Product Designer" />
               <MenuItem  logo={require('./Image/location.png')} cate="Noida area,India" />
               <MenuItem  logo={require('./Image/arrow.png')} cate="18 miles away" />
                    
                    
                    {/* <Image source={this.ItemImage}
            style={styles.Image}/><Text style={styles.overlayContainer}>ProductDesigner </Text>
           <Text style={styles.overlayContainer}> <Image style = {styles.logo1} source ={require('./Image/bag.png')} /> ProductDesigner </Text>
           <Text style={styles.overlayContainer}><Image style = {styles.logo1} source = {require('./Image/location.png')} />Noida area,India</Text>
           <Text style={styles.overlayContainer}><Image style = {styles.logo1} source = {require('./Image/arrow.png')} />18 miles away</Text> */}
                </View>
                <View style={styles.menuItem}>
                    <Image source={this.props.itemImage}
                        style={styles.Image} />
                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    menuItem: {
        width: 20,
        height: 20
    },
    container: {
        padding: 30,
        marginTop: 20,
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center"
    },
    name: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 50
    },
    // logo: {
    //     width: 10,
    //     height: 10,
    //     position: 'absolute',
    //     marginLeft:10
    //   },
    overlayContainer: {
        padding: 10,
        borderColor: '#fff',
        borderWidth: 1,
        height: 50,
        width: 300,
        textAlign: 'center',
        borderRadius: 10,
        margin: 10,
        fontSize: 20,
        backgroundColor: 'white',
        elevation: 20


    },
    logo: {

        width: 20,
        height: 20,
        marginLeft: 10

    },
    Image: {
        width: 20,
        height: 20,
        opacity: 0.8,
        marginRight: 20,
        position: "absolute"

    },
    overlay: {
        opacity: 5.5,
        backgroundColor: '#f5f5f5',
        flex: 2
    }
})