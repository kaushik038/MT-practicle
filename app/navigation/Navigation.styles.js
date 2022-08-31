import { Dimensions, StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';  


const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
    tabLabel: { 
        // marginTop:hp('0.3%'),
        fontSize: hp('1.4%'),
        color:"black",
        width: "50%",
        textAlign:"center",
        fontWeight: "500"
    },
    activeTabLabel: {
        // marginTop: hp('0.3%'),
        fontSize: hp('1.4%'),
        width:"50%",
        color: "#4adb95",
        textAlign: "center",
        fontWeight:"bold"
    },
    imageIcon: { 
        height: wp('5%'), 
        width: wp('5%'),
    },
    activeImageIcon: {
        height: wp('5%'),
        width: wp('5%'),
        tintColor: "#4adb95"
    },
    tabView:{
        height: wp('5%'),
        justifyContent:"center",
        alignItems:"center"
    }
    
});

export default styles;