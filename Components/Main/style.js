import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    height: "100%",
    width: "100%",
  },

  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },

  subhead: {
    fontSize: 16,
    color: "#5c5e62",
    marginTop: "10%",
    fontWeight: "bold",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },

  logo: {
    marginTop: "20%",
    alignItems: "center",
    width: "69%",
    height: "30%",
    marginLeft: "27%",
    position: "absolute",
  },

  buttonContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
});

export default styles;
