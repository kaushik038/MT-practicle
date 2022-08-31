import { Dimensions, StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
    shadowIconview:{
        shadowOpacity: 1,
        shadowColor: "#C0C0C0",
        shadowRadius: 10,
        borderRadius: 25,
        backgroundColor: '#4adb95',
        width: width * 0.83,
        height: width * 0.127,
        alignItems: "center",
        justifyContent: "center",
        margiBottom: 15, 
    },
    loginBtn: { 
        color: "white", 
        fontSize: hp('2%'),
        fontWeight:"bold" 
    }

});

export default styles;