import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import firebase from 'firebase'
export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailID: '',
      password: '',
    };
  }
  goToSignUp = () => {
    this.props.navigation.navigate('SignUp');
  };
userloginIn= async(emailID,password)=>{
  firebase.auth().signInWithEmailAndPassword(emailID,password).then(()=>{
    this.props.navigation.navigate('LoginIn');
  }).catch((error)=>{
    alert(error.message)
  })
}
  render() {
    return (
      <View>
        <Image source={require('../assets/Gift.jpg')} style={styles.gift} />
        <View>
          <TextInput
            placeholder="Enter The EmailID "
            style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({
                emailID: text,
              });
            }}></TextInput>
        </View>
        <View>
          <TextInput
            placeholder="Enter The Password"
            style={styles.inputBox}
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}></TextInput>
        </View>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'green' }]}
          onPress={() => {
            this.userloginIn(this.state.emailID, this.state.password);
          }}>
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button1, { backgroundColor: 'blue' }]}
          onPress={() => {
            this.goToSignUp();
          }}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  gift: {
    width: 200,
    height: 200,
    padding: 94,
    marginTop: 10,
    marginLeft: 70,
    backgroundColor: '#eaeaea',
  },
  inputBox: {
    marginTop: 50,
    marginBottom: 5,
    width: '90%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
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
  button1: {
    marginTop: 20,
    marginLeft: 50,
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 30,
  },
});
