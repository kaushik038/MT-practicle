import { Dimensions, StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const width =Dimensions.get('screen').width

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"  
    },
    icon:{
        height:width*0.05 ,
        width:width*0.051,
        tintColor:"#4adb95"
    },
    shadoInputView:{
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 1,
        shadowColor: "#C0C0C0",
        shadowRadius: 15,
        borderRadius: 25,
        backgroundColor: 'white',
        width:width*0.8,
        height:width*0.13,
        flexDirection:"row",
        alignItems:"center"
      },
      shadowIconview:{
        marginLeft:-10,
        shadowOpacity: 1,
        shadowColor: "#C0C0C0",
        shadowRadius: 10,
        borderRadius: 20,
        backgroundColor: 'white',
        width: width *0.15,
        height:  width *0.137,
        alignItems:"center",
        justifyContent:"center",
        margiBottom:15,
    },
    input:{ 
        width: width * 0.6,
        marginLeft: 10 ,
        color:"black",
        fontWeight:"bold",
        fontSize:hp('1.6%')
    }
  });

  export default styles;