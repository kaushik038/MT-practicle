
import React, { useMemo, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ImagePath from "../../assets/images";
import CustomButton from "../../component/Button/Button";
import CustomInput from "../../component/CustomInput/CustomInput";
import Sparator from "../../component/Sparetor";
import { login } from "../../redux/actions/LoginAction";
import styles from "./Login.style";
import { useDispatch, useSelector } from 'react-redux'
import { isValidEmail } from "../../utils/validation";

import { useEffect } from "react";



const Login = ({navigation}) => {

    const dispatch = useDispatch();

    const [email,setEmail]=useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({
        emailError: "",
        passwodError: ""
    })

    const user = useSelector(state=> state.user);

    
    useEffect(()=>{
        if (user?.isLogin) {
            navigation.navigate('Auth')
        }
    },[user])

   

    function userLogin(){
        console.log("email : ",email)
        if (!email && !password) {
            setError({
                ...error,
                emailError: "Please enter email",
                passwodError: "Please enter password"
            })
        }
        if (!email && password) {
            setError({
                ...error,
                emailError: "Please enter email",
            })
        }
        if (email && !password) {
            setError({
                ...error,
                passwodError: "Please enter password"
            })
        }
        if(email && password){
            dispatch(login({email,password}))
        }
    }

    console.log("user =-=-=->> ",user)

    return <View style={styles.container}>
        <Text style={styles.loginText}>Login</Text>
        <Sparator size={45} />
        <CustomInput
            icon={ImagePath.user}
            placeholder="Email"
            onChangeText={(value) => {
                if (isValidEmail(value)) {
                    setError({
                        ...error,
                        emailError: ""
                    })
                }
                else {
                    setError({
                        ...error,
                        emailError: "Please enter valid email"
                    })
                }
                
                setEmail(value)
               
            }} />
        {error?.emailError && <Text style={styles.error}>{error?.emailError}</Text>}
        <Sparator size={20} />
        <CustomInput
            icon={ImagePath.lock}
            placeholder="Password"
            password={true}
            onChangeText={(value) => {
                console.log("value is  : ", value)

                if(value){
                    setError({
                        ...error,
                        passwodError: "",
                    })
                }
                setPassword(value)
               
            }} />
        {error?.passwodError && <Text style={styles.error}>{error?.passwodError}</Text>}
        <Sparator size={45} />
        <CustomButton title={"Login"} onPress={()=>{
            userLogin()
          
            }}/>
        <Sparator size={25} />
       
    </View>
}

export default Login;