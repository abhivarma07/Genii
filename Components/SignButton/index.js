import React from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./style";

console.ignoredYellowBox = ['Setting a timer'];

const SignButton = (props) => {
  //   const type = props.type;
  //   const content = props.content;
  //   const onPress = props.onPress;

  const { type, content, onPress } = props;

  
  var ncolor = "#171A20CC";
  if(type == "primary"){
    ncolor = "#171A20CC"
  }
  else if(type == "secondary"){
    ncolor = "#FFFFFFA6"
  }
  else if(type == "login"){
    ncolor = "#2C6BED"
  }


  var tcolor = "#FFFFFFA6" ;
  if(type == "primary"){
    tcolor = "#FFFFFFA6"
  }
  else if(type == "secondary"){
    tcolor = "#171A20CC"
  }
  else if(type == "login"){
    tcolor = "white"
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: ncolor }]} raised
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: tcolor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default SignButton;
