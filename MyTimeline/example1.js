import React,{Component} from 'react';
import {AppRegistry,Text,View} from 'react-native';

export default class example1 extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'Brad',
            showName:false,
            message:this.props.message
        }
    }
    render()
   {
  let name=this.state.showName?this.state.name:'NoName';
  return(
      <View>
          <Text>{this.state.message}</Text>
          <Text>{name}</Text>
      </View>
  );
   } 
        }
 
