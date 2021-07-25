import React from "react";
import firebase from "firebase" ;
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function Options({ navigation }) {
  const work = () => {
    navigation.navigate("WorkAllotment" , {uid: firebase.auth().currentUser.uid});
  };

  const pressComplaintOptionHandler = () => {
    navigation.navigate("Complaint");
  };

  return (
    <View style={styles.BoxOption}>
        <View style={styles.MainBoxOption}>
          <TouchableOpacity style={styles.HeadBoxOption} onPress={work}>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>Work Allotment</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.secondHeadBoxOption}>
          <TouchableOpacity style={styles.HeadBoxOption} onPress={work}>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>Work Update</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  
  BoxOption: {
    flex: 1,
    marginLeft:"10%",
  },

  HeadBoxOption: {
    
    backgroundColor: "tomato",
    width: "90%",
    height:"40%",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius:30,
    padding:10,
  },
  secondHeadBoxOption: {
      width: "100%",
      height: "30%",
      padding:10,
      bottom:100,
  },
  
  MainBoxOption: {
      width: "100%",
      height: "30%",
      padding:10,
  },

 
});
