import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container: {
        flex: 1,
       height: "100%",
       width: "100%",
        alignItems: "center",
        justifyContent: "center"
   },
     inputContainer:{
       width: 300,

          },

     image: {
          width: "100%",
          height: "100%",
          resizeMode: "cover",
          position: "absolute",
        },
      
        logo: {
          width: 200,
          height: 60,
          marginTop:20, 
        },

        text: {
             width: "100%",
             marginTop : 40,
        },

        buttonContainer:{
             width:"80%",
             marginTop:20,
        }


  });
  
  export default styles;