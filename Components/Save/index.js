import React, { useState } from 'react'
import styles from "./style";
import { View, TextInput, Image, Button} from "react-native";

import firebase from 'firebase'
import { NavigationContainer } from '@react-navigation/native'
require("firebase/firestore")
require("firebase/firebase-storage")

function save(props) {
  const [project, setProject] = useState("");
  const [caption, setCaption] = useState("")

  const uploadImage = async () => {
      const uri = props.route.params.image;
      const childPath = `post/${firebase.auth().currentUser.uid}/${Math.random().toString(36)}`;
      console.log(childPath)

      const response = await fetch(uri);
      const blob = await response.blob();

      const task = firebase
          .storage()
          .ref()
          .child(childPath)
          .put(blob);

      const taskProgress = snapshot => {
          console.log(`transferred: ${snapshot.bytesTransferred}`)
      }

      const taskCompleted = () => {
          task.snapshot.ref.getDownloadURL().then((snapshot) => {
              savePostData(snapshot);
              console.log(snapshot)
          })
      }

      const taskError = snapshot => {
          console.log(snapshot)
      }

      task.on("state_changed", taskProgress, taskError, taskCompleted);
  }
  const savePostData = (downloadURL) => {

    firebase.firestore()
        .collection('posts')
        .doc(firebase.auth().currentUser.uid)
        .collection("userPosts")
        .add({
            downloadURL,
            project,
            likesCount: 0,
            creation: firebase.firestore.FieldValue.serverTimestamp()
        }).then((function () {
            props.navigation.popToTop();
        }))
}


  return (
    <View style={styles.container}>
      <View style={styles.Imagecontainer}>
      <Image source={{uri : props.route.params.image}} style = {styles.image} />
      </View>

      <View style={styles.Textcontainer}>
      <TextInput
      style={{backgroundColor:'white'}}
        placeholder="Write the Project Name"
        onChangeText={(project) => setProject(project)}

      />
      <Button title="Save" onPress={() => uploadImage()}/>
      </View>
    </View>
  );
}


export default save;
