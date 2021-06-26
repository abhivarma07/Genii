import React, { Component } from "react";
import { View, Button, TextInput, ImageBackground , Image} from "react-native";
import styles from "./style"
import firebase from "firebase";
import "firebase/firestore";
import Signbutton from "../SignButton";


export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
    };

    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    const { email, password, name } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({
            name,
            email,
          });
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/bg-img.jpg")}
          style={styles.image}
        />
        <Image
          source={require("../../assets/logos.png")}
          style={styles.logo}
        />
      
      <View style={styles.inputContainer}>
      <TextInput
          placeholder="NAME"
          onChangeText={(name) => this.setState({ name })}
          style={styles.text}
          placeholderTextColor="white"
        />
        <TextInput
          placeholder="EMAIL"
          onChangeText={(email) => this.setState({ email })}
          style={styles.text}
          placeholderTextColor="white"
        />
        <TextInput
          placeholder="PASSWORD"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
          style={styles.text}
          placeholderTextColor="white"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Signbutton
        type="login"
        content={"Sign Up"}
        onPress={() => this.onSignUp()}
        style={styles.button}
        />
      </View>

      </View>
    );
  }
}

export default Register;
