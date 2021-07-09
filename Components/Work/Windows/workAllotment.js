import React from "react";

import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import SelectBox from "react-native-multi-selectbox";


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
  


export default function Options({ navigation }) {
  const pressProjectsOptionHandler = () => {
    navigation.navigate("Project");
  };

  const pressComplaintOptionHandler = () => {
    navigation.navigate("Complaint");
  };

  return (
    <View style={styles.BoxOption}>

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

const styles = StyleSheet.create({
  text: {
    flex: 1,
    fontSize: 20,
    padding: 10,
    backgroundColor: "lightblue",
  },
  HeadBoxOption: {
    flex: 0.5,
    backgroundColor: "tomato",
    alignSelf: "baseline",
    height: "100%",
    width: "100%",
    alignContent: "center",
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
