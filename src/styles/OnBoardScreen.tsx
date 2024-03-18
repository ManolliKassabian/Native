import { StyleSheet } from "react-native";
import COLORS from "../consts/colors";

const style = StyleSheet.create({
    details: {
      height: '50%',
      bottom: 0,
      position: 'absolute',
      paddingHorizontal: 40,
    },
    btn: {
      height: 50,
      width: 120,
      backgroundColor: COLORS.white,
      marginTop: 20,
      borderRadius: 7,
      justifyContent: 'center',
      alignItems: 'center',
    },
  }); 
   export default style;
