import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context"
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AppHeader from './components/AppHeader'
import HomeScreen from './Screens/HomeScreen'
import FormScreen from './Screens/FormScreen'
import  SignUpScreen from './Screens/SignUpScreen'
import SuggestionScreen from './Screens/SuggestionScreen'
export default class App extends React.Component{
  render(){
   return (
    <View  style={{backgroundColor:'red'}}>
    
  <SafeAreaProvider>
    <AppHeader name="Gift Suggestion App"></AppHeader>
   <AppContainer />
    </SafeAreaProvider>
    </View>
  );
  }
 }


/* var AppStackNavigator = createStackNavigator({
   
  Suggestion:{screen:SuggestionScreen}
},
  {
    initialRouteName: 'Suggestion'
  }
); */
 var AppNavigator = createSwitchNavigator({
  Home: {screen:HomeScreen},
  SignUp:{screen:SignUpScreen},
  LoginIn:{screen:FormScreen },
  Suggestion:{screen:SuggestionScreen}
  //AppStackNavigator: {screen:AppStackNavigator}
  
});
var AppContainer = createAppContainer(AppNavigator);

