import React from 'react'
import{Text,StyleSheet} from 'react-native'
import {Header} from 'react-native-elements'
export default class AppHeader extends React.Component{
  render(){
    return(
     <Header
  centerComponent={{ text: this.props.name, style: { color: '#fff' } }}
  />

   
    )
  }
}
