import React from 'react'
import {StyleSheet,Text,TouchableOpacity,View,TextInput,Alert}from 'react-native'
import AppHeader from '../components/AppHeader'

export default class SuggestionScreen extends React.Component{
  constructor(){
    super();
    this.state={
      gifts:this.props.navigation.getParam("gifts")
    }
  }
   goToForm = () => {
    this.props.navigation.navigate('LoginIn');
  };
  render(){
    console.log(this.state.gifts)
    return(
      <View>
      <AppHeader name="Suggestion"></AppHeader>
      <Text>No Suggestion  </Text>
      <TouchableOpacity 
     style={[styles.button, { backgroundColor: 'yellow' }]}
      onPress={() => {
            this.goToForm();
          }}><Text>Back</Text></TouchableOpacity>

      {this.state.gifts.map((value,index)=>{
        return(<View>
        <Text>{value}</Text>
        </View>)

      })}
      </View>
    )
  }
}
const styles = StyleSheet.create({
 
  button: {
    marginTop: 20,
    marginLeft: 50,
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 30,
  },
 
});