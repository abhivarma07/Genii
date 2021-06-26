import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, Text, View } from "react-native";
import Signbutton from "../SignButton";
import styles from "./style";

console.ignoredYellowBox = ['Setting a timer'];

const Main = ({ navigation }) => {
  return (
    <View style={styles.title}>
      <StatusBar style="light"/>
      <ImageBackground
        source={require("../../assets/bg-img.jpg")}
        style={styles.image}
      />
      <ImageBackground
        source={require("../../assets/logos.png")}
        style={styles.logo}
      />

      <View style={styles.titles}>
        <Text style={styles.subhead}>Renewable Solar Solutions</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Signbutton
          type="primary"
          content={"Sign In"}
          onPress={() => navigation.navigate('Login')}
        />

        <Signbutton
          type="secondary"
          content={"Sign Up"}
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
};

export default Main;
