import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from 'react-native';
import AppHeader from '../components/AppHeader';
import firebase from 'firebase';
import db from '../Config.js';
export default class SignUpScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      emailID: '',
      password: '',
      confirmPassword: '',
    };
  }
  goToForm = () => {
    this.props.navigation.navigate('LoginIn');
  };
  addUser = async (emailID, password, confirmPassword) => {
    if (password !== confirmPassword) {
      alert('worng password');
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(emailID, password)
        .then(() => {
          db.collection('users').add({
            name: this.state.name,
            age: this.state.age,
            emailID: this.state.emailID,
            password: this.state.password,
          });
          alert('your acoount is success created');
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage);
        });
    }
  };

  render() {
    return (
      <View>
        <AppHeader name="Create a Acount"></AppHeader>
        <TextInput
          placeholder="Enter your Name "
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({
              name: text,
            });
          }}></TextInput>
        <TextInput
          placeholder="Enter your Age"
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({
              age: text,
            });
          }}></TextInput>
        <TextInput
          placeholder="Enter Your EmailID"
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({
              emailID: text,
            });
          }}></TextInput>
        <TextInput
          placeholder="Enter Your Pasword"
          style={styles.inputBox}
          secureTextEntry={true}
          onChangeText={(text) => {
            this.setState({
              password: text,
            });
          }}></TextInput>
        <TextInput
          placeholder="Enter Your Confirm Pasword"
          style={styles.inputBox}
          secureTextEntry={true}
          onChangeText={(text) => {
            this.setState({
              confirmPassword: text,
            });
          }}></TextInput>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'yellow' }]}
          onPress={() => {
            this.goToForm();
            this.addUser(
              this.state.emailID,
              this.state.password,
              this.state.confirmPassword
            );
          }}>
          <Text>Comfirm Account </Text>
        </TouchableOpacity>
      </View>
    );
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
    backgroundColor: 'white',
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
});
