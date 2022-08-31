import { saveRestaurantList, loginSuccess, logoutSuccess } from '../reducer/LoginReducer';
import Toast from 'react-native-toast-message';
import { useSelector } from 'react-redux';

export const login = ({ email, password }) => async (dispatch, getState) => {
 
    const  {user}  = getState()
  
    if (user?.defaultUser?.email == email && user?.defaultUser?.password==password){
             Toast.show({
                 type: 'success',
                 text1: 'Success',
                 text2: 'User login sucessfully'
             });
             dispatch(loginSuccess(true));
         } 
         else{
             Toast.show({
                 type: 'error',
                 text1: 'Login Error',
                 text2: 'Pelase check your email and password'
             });
         }
    
}

function calculateDistance(lat1, lon1, lat2, lon2, unit) {
    var radlat1 = Math.PI * lat1 / 180
    var radlat2 = Math.PI * lat2 / 180
    var radlon1 = Math.PI * lon1 / 180
    var radlon2 = Math.PI * lon2 / 180
    var theta = lon1 - lon2
    var radtheta = Math.PI * theta / 180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180 / Math.PI
    dist = dist * 60 * 1.1515
    if (unit == "K") { dist = dist * 1.609344 }
    if (unit == "N") { dist = dist * 0.8684 }
    return dist
}

export const getRestaurantsList = () => async dispatch => {
    try {
      const res = await   fetch('http://205.134.254.135/~mobile/interview/public/api/restaurants_list', {
            method: "GET"
        }).then(res=>res.json())

        if(res?.data && res?.data.length>0){
            var uniqueNodes = res?.data
            for ( i = 0; i < uniqueNodes.length; i++) {
                uniqueNodes[i]["distance"] = calculateDistance(uniqueNodes[0]["latitude"], uniqueNodes[0]["longitude"], uniqueNodes[i]["latitude"], uniqueNodes[i]["longitude"],"K");
}

uniqueNodes.sort(function(a, b) { 
  return a.distance - b.distance;
});
            dispatch(saveRestaurantList(uniqueNodes))
        }
        // return dispatch(logout(Success())
    } catch (e) {
        return console.error(e.message);
    }
}



export const logout = () => async dispatch => {
    try {
        return dispatch(logoutSuccess())
    } catch (e) {
        return console.error(e.message);
    }
}