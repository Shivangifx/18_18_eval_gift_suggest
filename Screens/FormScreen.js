import React from 'react'
import {StyleSheet,Text,TouchableOpacity,View,TextInput}from 'react-native'
import AppHeader from '../components/AppHeader'
import firebase from 'firebase'
import db from '../Config.js'
export default class FormScreen extends React.Component{
   constructor() {
    super();
    this.state = {
      event:"",
      age:"",
      budget:"",
      people:"",
      gifts:[]

    };
  }
  goToSuggestion = () => {
    this.props.navigation.navigate('Suggestion',{"gifts":this.state.gifts});
  };
  getGift=async()=>{
    console.log(this.state.event)
    console.log(this.state.age)
    console.log(this.state.budget)
    console.log(this.state.people)
    var giftRef = await db.collection("Gifts")
    .where("event-name","==",this.state.event)
    .where("Age","==",this.state.age)
    .where("budget","==",this.state.budget)
    .where("Type-Of-People","==",this.state.people)
    .get();
    if(giftRef.docs.length == 0){
      alert("The document is not there in our firebase")
    }
    else{
      giftRef.docs.map((doc)=>{
    var gifts = doc.data()
    var giftslist=gifts.Gifts;
    console.log(gifts);
    this.setState({gifts:giftslist})

    })
    }
    
    //this.props.navigation.navigate("Suggestion",{"gifts":this.state.gifts})
  }
  render(){
    return(
      <View>
      <AppHeader name="FORM"></AppHeader>
      <TextInput
    placeholder="Name The Event"
    style={styles.inputBox}
    onChangeText = {(text)=>{
       this.setState({
         event:text,
       })
    }}
    ></TextInput>
       <TextInput
    placeholder="Enter The Age"
    style={styles.inputBox}
      onChangeText = {(text)=>{
       this.setState({
         age:text,
       })
    }}
    ></TextInput>
       <TextInput
    placeholder="Enter Your Budget"
    style={styles.inputBox}
      onChangeText = {(text)=>{
       this.setState({
         budget:text,
       })
    }}
    ></TextInput>
     <TextInput
    placeholder="Type Of People"
    style={styles.inputBox}
      onChangeText = {(text)=>{
       this.setState({
         people:text,
       })
    }}
    ></TextInput>
     <TouchableOpacity style={[styles.button, { backgroundColor: 'yellow' }]}
      onPress={async() => {
         
            this.getGift()
          }}>
     <Text>Submit</Text>
        </TouchableOpacity>
       
        {this.state.gifts.map((value,index)=>{
          return(<View  style={styles.design}>
          <Text style={styles.size}>{value}</Text>
          </View>)
        })}

   
      </View>
    )
  }
}
const styles = StyleSheet.create({
 
  inputBox: {
    marginTop: 50,
    marginBottom: 5,
    width: '90%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
   backgroundColor:'white'
  },
  button: {
    marginTop: 20,
    marginLeft: 50,
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 30,
  },
  design:{
    borderColor:"black",
    padding:20,
    borderWidth:20
  },
  size:{
    fontSize:30
  }
 
});
