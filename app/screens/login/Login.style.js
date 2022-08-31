import { Dimensions, StyleSheet } from 'react-native'
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen';

const width=Dimensions.get('screen').width

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"  
    },
    loginText:{
        color:"black",
        fontSize:hp('3%'),
        fontWeight:"bold"
    },
    error: {
        marginTop: 5,
        width: width * 0.52,
        fontSize: hp('1.6%'),
        color: "red"
    },
  });

  export default styles;