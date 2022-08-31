import { style } from "deprecated-react-native-prop-types/DeprecatedTextPropTypes";
import React, { useCallback, useEffect, useState } from "react";
import { Text, TouchableOpacity, View, FlatList, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ImagePath from "../../assets/images";

import styles from "./RestaurantList.style";
import StarRating from 'react-native-star-rating-widget';
import { createTable, getDBConnection, getRestaurantItems, saveRestaurantItems } from "../../services/db-service";
import { getRestaurantsList } from "../../redux/actions/LoginAction";
import { useFocusEffect } from "@react-navigation/native";



const RestaurantList = ({ navigation }) => {
    const dispatch = useDispatch()

    

    const restaurantList = useSelector(state => state.user?.restaurantList);


    

    const loadDataCallback = useCallback(async () => {
    try {
       
      const db = await getDBConnection();
       
       
      await createTable(db).then(res=>console.log("res : ",res)).catch(e=>console.log("errror :=-==-=> ",e));
        
      const storedRestaurantItems = await getRestaurantItems(db);
        console.log(" storedRestaurantItems  : ", storedRestaurantItems)
        if (storedRestaurantItems?.length) {
            console.log(" storedRestaurantItems  : ", storedRestaurantItems)

      } else {
        console.log("called =-=-=>")
            // dispatch(getRestaurantsList())
            const res = await fetch('http://205.134.254.135/~mobile/interview/public/api/restaurants_list', {
                method: "GET"
            }).then(res => res.json())
            console.log("res =-=-=>>> ", res)
            if (res?.data && res?.data.length > 0) {
                await saveRestaurantItems(db, res?.data)
                // dispatch(saveRestaurantList(res?.data))
            }
      }

       
    } catch (error) {
      console.log(error);
    }

  }, []);

    useEffect(()=>{
        loadDataCallback()
         dispatch(getRestaurantsList())
       
    }, [loadDataCallback])

   
console.log("list : ",restaurantList)

    return <View style={styles.container}>
        <View style={styles.headerView}>
            <Text style={styles.headerTitle}>Restaurant List</Text>
        </View>
        <FlatList
            style={{ width: "100%" }}
            data={restaurantList}
            contentContainerStyle={{paddingBottom:20}}
            renderItem={({ item, index }) => {
                return <TouchableOpacity 
                onPress={()=>{
                        navigation.navigate('Home', { screen:"Detail screen",params:{item:item}})
                }}
                style={styles.card}>
                    <View style={styles.cardLeft}>
                        {item.images.length > 0  &&<Image style={styles.image} source={ {uri:item.images[0].url}} />}
                        <View style={styles.titleView}>
                            <Text style={styles.cardTitle}>{item?.title}</Text>
                            <StarRating
                                rating={item?.rating}
                                starSize={15}
                                onChange={() => { }}
                                starStyle={styles.star}
                                style={styles.rating}
                            />
                        </View>
                    </View>
                    <View style={styles.cardRight}>
                        <View style={styles.locationView}>
                            <Image source={ImagePath.locationIcon} style={styles.loctionPin} />
                        </View>
                    </View>
                </TouchableOpacity>
            }}
        />

    </View>

}

export default RestaurantList;