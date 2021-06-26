import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      containerInfo: {
        margin: 20,
      },
      containerGallery: {
        flex: 1,
      },
      containerImage: {
        flex: 1 / 3,
        padding:2,
      },
      image: {
        flex: 1,
        aspectRatio: 1 / 1,
      },

      buttonContainer:{
            width:"40%",
            bottom:0,
            marginLeft:"60%",
            marginTop:20,

      },

      Info:{
          fontSize:18,
          fontWeight:"bold",
      },

      project:{
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
      },

      PInfo:{
        fontSize:25,
        fontWeight:"700",
        width : "60%",
        padding: 5,
        backgroundColor : "black",
        color : "white",
        borderRadius:10,
        
      },

      ImageText:{
          fontWeight:"bold",
          alignSelf:"center",
          
      }


});

export default styles;
