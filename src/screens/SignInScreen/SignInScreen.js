import React, {useState} from 'react'
import {View , Text , Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

const SignInScreen = () => {
  const [username , Setusername] = useState('');
  const [password , Setpassword] = useState('');

  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn("Sign In");
  };

  const onForgotPasswordPressed = () => {
    console.warn('onForgotPasswordPressed')
  };

  const onSignUpPressed = () => {
    console.warn('onSignUpPress');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
  <View style={styles.root}>
    <Image source={Logo} 
    style={[styles.logo, {height : height*0.3}]}
    resizeMode="contain"
    />

    <CustomInput 
    placeholder="Nome"
    value={username}
    setValue={Setusername} 
    />
    <CustomInput
    placeholder="Password" 
    value={password} 
    setValue={Setpassword}
    secureTextEntry={true}
    />
    <CustomButton text="Sign In" onPress={onSignInPressed}/>

    <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type="TERTIARY"/>

    <SocialSignInButtons/>

    <CustomButton text="Don't have an account? Create one" onPress={onSignUpPressed} type="TERTIARY"/>

  </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  }
})

export default SignInScreen;