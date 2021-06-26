import React, { Component } from 'react'
import { View, Button, TextInput, ImageBackground , Image} from "react-native";
import styles from "./style"
import firebase from 'firebase'
import Signbutton from "../SignButton";

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }

        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
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
        )
    }
}

export default Login