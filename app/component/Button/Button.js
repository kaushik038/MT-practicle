import React from "react";
import { Dimensions, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./Button.style";
import { Shadow } from '../../lib/react-native-neomorph-shadows';



const width = Dimensions.get('screen').width

const CustomButton = ({ onPress,title }) => {
    return <TouchableOpacity onPress={onPress}>
        <Shadow
            style={styles.shadowIconview}
        >
            <Text style={styles.loginBtn}>{title}</Text>
        </Shadow>
    </TouchableOpacity>

}

export default CustomButton;