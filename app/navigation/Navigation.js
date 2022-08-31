import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login/Login';
import store from '../redux/store'
import { Provider, useSelector } from 'react-redux'
import Toast from 'react-native-toast-message';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View } from 'react-native';
import ImagePath from '../assets/images';
import styles from './Navigation.styles';
import RestaurantList from '../screens/Listing/RestaurantList';
import RestaurantDetails from '../screens/Details/RestaurantDetails';




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const showHader={
  headerShown:false
}
const  RouteNavigation=() => {  
 
  return (
    <Provider store={store}>
    <NavigationContainer>
        <Stack.Navigator initialRouteName='NoAuth' >
        <Stack.Screen name='NoAuth' component={NoAuthStack} options={showHader} />
        <Stack.Screen  name='Auth' component={AuthStack} options={showHader} /> 
    </Stack.Navigator>
    </NavigationContainer>
      <Toast />
    </Provider>
  );
}

const AuthStack = ()=>{
    return( <Stack.Navigator >
      <Stack.Screen name="Home" component={HomeTab} options={showHader} /> 
    </Stack.Navigator>)
}


const NoAuthStack = ()=>{
    return (<Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={showHader} />
    </Stack.Navigator>)
}

const HomeTab =()=>{
  return <Tab.Navigator  screenOptions={{
    
  }}>
    <Tab.Screen name="Listing" 
    options={{
      headerShown:false,
      tabBarShowLabel:false,
      tabBarIcon: ({ focused, color, size }) => {
        return <View style={styles.tabView}>
          <Image source={ImagePath.list} style={focused ? styles.activeImageIcon : styles.imageIcon} />
          <Text style={focused ? styles.activeTabLabel: styles.tabLabel} >Listing</Text>
        </View>
        
      }
    }} 
    component={RestaurantList} />
    <Tab.Screen name="Detail screen" 
    component={RestaurantDetails} 
    options={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarLabelStyle: styles.tabLabel,
      tabBarIcon: ({ focused, color, size }) => {
        return <View style={styles.tabView}> 
          <Image source={ImagePath.restorantDetails} style={focused ? styles.activeImageIcon : styles.imageIcon} />
          <Text style={focused ? styles.activeTabLabel : styles.tabLabel} >Details Screen</Text>
        </View>
      }
    }} />
  </Tab.Navigator>
}


export default RouteNavigation;

