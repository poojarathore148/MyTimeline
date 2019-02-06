import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ImageBackground, Button, TextInput, Alert, TouchableHighlight } from 'react-native';
import MenuItem from './MenuItem2';
import { PropTypes } from 'prop-types';
// import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-native-navigation/';
import { Navigation } from 'react-native-navigation';

export default class profileScreen2 extends Component {
    static propTypes = {
        componentId: PropTypes.string,
    };
 _onPressButton = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: 'Demo'
            }
        })
    }
    constructor(props) {
        super(props);

        this.state = {
            dataSource: [{
                name: {
                    first: "shubham"
                },
                email: ""
            }]
        }
// handlePress=()=>{
        fetch('https://randomuser.me/api/')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ dataSource: responseJson.results }
                    , function () {
                        alert(this.state.dataSource[0].name.first)
                        alert(this.state.dataSource[0].email)
                    });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        return (
                <View style={styles.overlay}>
                <View style={{ height: '25%', backgroundColor: 'black'}} />
                <Image style={{ position: "absolute", height: 20, width: 20, backgroundColor: 'black', margin: 10 }} source={require('./Image/back.png')} />
                <Image style={{ width: '30%', height: 100, borderRadius: 20, marginLeft: 140, marginTop: 100, position: "absolute", justifyContent: "center", alignItems: "center" }}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1J-pQn7dBacOdSa0F9Cn070SPMkT4-H1e9Em5lrgK1ERxydUiVA' }}
                />
                <View style={styles.container}>
                    <Text style={styles.name} >{this.state.dataSource[0].name.first}</Text>
                    <Text style={{ textAlign: 'center', marginBottom: 20 }} >{this.state.dataSource[0].email}</Text>

                    <MenuItem logo={require('./Image/bag.png')} cate="Product Designer" />
                    <MenuItem logo={require('./Image/location.png')} cate="Noida area,India" />
                    <MenuItem logo={require('./Image/arrow.png')} cate="18 miles away" />
               </View>
                <View style={styles.menuItem}>
                    <Image source={this.props.itemImage}
                        style={styles.Image} />
                </View>
              <Button
                    onPress={this._onPressButton} color="rgba(86,49,135,1)"
                    title="Press Me">
                </Button>
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
    },
    name: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 50
    },
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
        flex: 1
    }
})