import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center"
    },
    headerView: {
        width: '100%',
        height: hp('6%'),
        backgroundColor: "#4adb95",
        justifyContent: "center",
        alignItems: "center"
    },
    headerTitle: {
        fontSize: hp('2%'),
        // fontWeight: "500",
        color: "white"
    },
    imageSlider:{
        height:hp('50%'),
    },
    image:{
        width:'100%',
        height:hp('50%')
    },
    name:{
       fontSize:hp('1.8%'),
       color:"black" ,
       fontWeight:"bold"
    },
    detailsView:{
        paddingTop:hp('1%'),
        paddingHorizontal:wp('4%')
    },
    address:{
        marginTop:wp('1%'),
        fontSize:hp('1.6%'),
        color: "grey",
        fontWeight: "500" 
    },
    timeView:{
        marginTop:hp('5%'),
        alignSelf:"center",
        width:wp('60%'),
        flexDirection:"row",
        justifyContent:"space-between"
    },
    timeCol:{
      justifyContent:"center",
      alignItems:"center"  
    },
    timeIcon:{
        width:wp('5%'),
        height:wp('5%'),
        tintColor:"#eecb84"
    },
    locationIcon:{
        width: wp('5%'),
        height: wp('5%'),
        tintColor: "#eecb84" 
    },
    serveIcon: {
        width: wp('5%'),
        height: wp('5%'),
        tintColor: "#c4738e"
    },
    subTitle:{
        marginTop: wp('1%'),
        fontSize: hp('1.2%'),
        color: "grey",
        fontWeight: "500"   
    },
    descrption:{
        marginTop: hp('5%'),
        fontSize: hp('1.4%'),
        color: "grey",
        fontWeight: "500" ,
        paddingBottom:hp('5%')
    },
    count:{
        fontSize: hp('2.2%'),
        color: "white",
        fontWeight: "500" 
    },
    countView:{
        marginTop:-hp('3.5%'),
        alignSelf:"flex-end",
        marginRight:wp('5%'),
        height:wp('13%'),
        width:wp('13%'), 
        backgroundColor:"#4adb95",
        justifyContent:"center",
        alignItems:"center",
        borderTopLeftRadius:15,
        borderBottomRightRadius:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    callView:{
        width:"100%",
        backgroundColor:"#4adb95",
        height:hp('5%'),
        justifyContent:"center",
        alignItems:"center"
    },
    callBtnText:{
        fontSize: hp('2%'),
        color: "white",
      
    }
});

export default styles;