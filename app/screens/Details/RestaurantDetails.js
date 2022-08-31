import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, FlatList, Image, ScrollView, Linking } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ImageSlider from 'react-native-image-slider';

import styles from "./RestaurantDetails.style";
import { style } from "deprecated-react-native-prop-types/DeprecatedTextPropTypes";
import ImagePath from "../../assets/images";
import CustomButton from "../../component/Button/Button";


const RestaurantDetails = ({ navigation,route }) => {
    const dispatch = useDispatch()

     const restaurantList = useSelector(state => state.user?.restaurantList);

    var item = route?.params?.item ? route?.params?.item : restaurantList?.length>0 ?restaurantList[0] :{}

    return <View style={styles.container}>
        <View style={{
            flex:1
        }}>
            <ScrollView >
        <View style={styles.headerView}>
            <Text style={styles.headerTitle}>Restaurant Detail</Text>
        </View>
        <View style={styles.imageSlider}>
        <ImageSlider
        images={item?.images} 
            customSlide={({ index, item, style, width }) => (
                <View key={index} style={[style, styles.imageSlider]}>
                    <Image source={{ uri: item.url }} style={styles.image} />
                </View>
            )}
        />

        </View>
        <View style={styles.countView}>
                <Text style={styles.count}>{item?.images?.length}</Text>
            </View>
        <View style={styles.detailsView}>
            <Text style={styles.name}>{item?.title}</Text>
            <Text style={styles.address}>{item?.address}</Text>
            <View style={styles.timeView}>
                <View style={styles.timeCol}>
                    <Image source={ImagePath.timeIcon} style={styles.timeIcon}/>
                    <Text style={styles.subTitle}>10AM-11AM</Text>
                </View>
                <View style={styles.timeCol}>
                    <Image source={ImagePath.locationIcon} style={styles.locationIcon} />
                            <Text style={styles.subTitle}>{item.distance.toFixed(2)}Km</Text>
                </View>
                <View style={styles.timeCol}>
                    <Image source={ImagePath.serveicon} style={styles.serveIcon} />
                    <Text style={styles.subTitle}>Delivery</Text>
                </View>
            </View>
        
                    <Text style={styles.descrption}>{item?.description}</Text>
        </View>
            </ScrollView>
        </View>
        <View>
            <TouchableOpacity 
            onPress={()=>{
                    Linking.openURL(`tel:${item?.mobile}`)
            }}
            style={styles.callView} >
                <Text style={styles.callBtnText}>Call</Text>
            </TouchableOpacity>
        </View>
    </View>
    
}

export default RestaurantDetails;