import React from "react";
import { Dimensions, Image, Text, TextInput, View } from "react-native";
import styles from "./CustomInput.style";
import { Shadow } from '../../lib/react-native-neomorph-shadows';


const width = Dimensions.get('screen').width

const CustomInput = ({ icon, placeholder, onChangeText,password }) => {
    return <Shadow
        inner
        useArt
        style={styles.shadoInputView}
    >
        <Shadow
            style={styles.shadowIconview}
        >
            <Image
                style={styles.icon}
                source={icon} />
        </Shadow>
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={"black"}
            style={styles.input}
            secureTextEntry={password}
            onChangeText={onChangeText} />
    </Shadow>
}

export default CustomInput;