import React , {useState , useEffect , Component} from "react";
import {LogBox} from "react-native" ;
import firebase from "firebase";
require("firebase/firestore");

import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import SelectBox from "react-native-multi-selectbox";
require("firebase/firestore");
import { connect } from "react-redux";

LogBox.ignoreLogs(['Setting a timer']);


const P_OPTIONS = [
    {
      item: 'Solar power',
      id: 'SPP',
    },
    {
      item: 'Hydal power',
      id: 'HPP',
    },
    {
      item: 'Wind Power',
      id: 'WPP',
    },
    {
      item: 'Thermal power',
      id: 'TPP',
    },
    {
      item: 'Nuclear power',
      id: 'NPP',
    },
    {
      item: 'Geothermal Power',
      id: 'GPP',
    }
  ]
  


export default function Work(props) {

  const [user,setUser] = useState(props) ;

  firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .get()
          .then(snapshot => {
            if(snapshot.exists)
            {
              setUser(snapshot.data())
            }
            else{
              console.log('does not exist') ;
            }
          })

  const pressProjectsOptionHandler = () => {
    props.navigation.navigate("Project");
  };

  const pressComplaintOptionHandler = () => {
    props.navigation.navigate("Complaint");
  };

  return (
    <View style={styles.BoxOption}>     
        <View style={styles.Main}>
        <Text style={styles.text}>
          FROM : {user.name}
        </Text>
        </View>
      <View style={styles.MainBoxOption}>
        <View style={styles.rowOne}>
          <TouchableOpacity
            style={styles.MainBoxOption}
            onPress={pressProjectsOptionHandler}
          >
            <Text style={styles.Projecttext}>Project Allotment</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.MainBoxOption}
            onPress={pressComplaintOptionHandler}
          >
            <Text style={styles.Complainttext}>Complaint Filing</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rowTwo}>
          <TouchableOpacity
            style={styles.MainBoxOption}
            onPress={pressComplaintOptionHandler}
          >
            <Text style={styles.Complainttext}>Billing</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.MainBoxOption}
            onPress={pressComplaintOptionHandler}
          >
            <Text style={styles.Complainttext}>Others</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
  posts: store.userState.posts,
  following: store.userState.following,
});

const styles = StyleSheet.create({
  text: {
    flex: 1,
    flexBasis: 1,
    fontSize: 20,
    padding: 10,
    marginTop:20,
    textAlign:"center",
    justifyContent: "center",
    backgroundColor: "lightblue",
    fontWeight: "bold",
    width: "100%",
    borderRadius: 60,
  },
  HeadBoxOption: {
    flex: 0.5,
    backgroundColor: "tomato",
    alignSelf: "baseline",
    height: "100%",
    width: "100%",
    alignContent: "center",
  },

  Main:{
    flex: 1,
    position: "absolute",
    width: "100%",
    marginTop:"2%"
  },

  BoxOption: {
    alignSelf: "baseline",
    width: "100%",
    flex: 1,
  },
  MainBoxOption: {
    flex: 1,
    flexDirection: "column",
    height: "30%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  Projecttext: {
    flex: 1,
    flexBasis: 1,
    fontSize: 20,
    padding: 20,
    marginTop:20,
    textAlign:"center",
    justifyContent: "center",
    backgroundColor: "lightblue",
    fontWeight: "bold",
    width: "100%",
    borderRadius: 60,
  },
  Complainttext: {
    flex: 1,
    flexBasis: 1,
    fontSize: 20,
    padding: 20,
    marginTop:20,
    textAlign:"center",
    justifyContent: "center",
    backgroundColor: "lightblue",
    fontWeight: "bold",
    width: "100%",
    borderRadius: 60,
  },

  rowOne: {
    flexDirection: "row",
    width: "100%",
    height: "50%",
    bottom:-450,
  },

  rowTwo: {
    flexDirection: "row",
    width: "100%",
    height: "50%",
    bottom:-200,
  },
});

