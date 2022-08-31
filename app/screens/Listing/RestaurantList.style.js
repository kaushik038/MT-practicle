import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingBottom:hp('5%')
    },
    headerView:{
        width:'100%',
        height:hp('6%'),
        backgroundColor:"#4adb95",
        justifyContent:"center",
        alignItems:"center"
    },
    headerTitle:{
        fontSize:hp('2%'),
        fontWeight:"500",
        color:"white"
    },
    card:{
        marginTop:hp('1%'),
        alignSelf:"center",
        backgroundColor:"white",
        height:hp('9%'),
        width:"93%",
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    cardLeft:{
        paddingHorizontal:wp('4%'),
        width:"80%",
        height:"100%",
        flexDirection:"row",
        alignItems:"center"
    },
    image:{
        width:wp('11.5%'),
        height:wp('11.5%'),
        backgroundColor:"#4adb95",
        borderRadius:5,
    },
    cardTitle:{
        fontSize:hp('1.6%'),
        color:"black",
        fontWeight:'500'
    },
    titleView:{
        paddingHorizontal:wp('4%'),
        
    },
    loctionPin:{
        height:wp('5%'),
        width: wp('5%'),
        tintColor:"white"
    },
    cardRight:{
    //    borderWidth:1,
        paddingHorizontal: wp('4%'),
       width:'20%',
       justifyContent:"center",
       alignItems:"flex-end"
    },
    locationView:{
       width:wp('7%') ,
        height: wp('7.5%'),
        backgroundColor:'#4adb95',
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center"
    },
    star: { marginRight: -5 },
    rating:{
        marginTop:hp('0.2%'),
        marginLeft:-wp('1%')
    }
});

export default styles