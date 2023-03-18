import React, {useState} from 'react'
import {Button , View , Text , StyleSheet, ScrollView, Linking, SafeAreaView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

const SignUpScreen = () => {
  const [username , SetUsername] = useState('');
  const [email , SetEmail] = useState('');
  const [password , SetPassword] = useState('');
  const [passwordRepeat , SetPasswordRepeat] = useState('');

  const onRegisterPressed = () => {
  console.warn('onRegisterPressed');
  };
  const onSignInPressed = () => {
    console.warn('onSignInPress');
  };
  const OnTermsofUsePressed = () => {
    console.warn('onTermsofUsePressed');
  };
  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };


  return (

    <ScrollView showsVerticalScrollIndicator={false}>
  <View style={styles.root}>
    <Text style={styles.title}>Create an account </Text>

    <CustomInput 
    placeholder="Nome"
    value={username}
    setValue={SetUsername} 
    />
     <CustomInput 
    placeholder="Email"
    value={email}
    setValue={SetEmail} 
    />
    <CustomInput
    placeholder="Password" 
    value={password} 
    setValue={SetPassword}
    secureTextEntry={true}
    />
    <CustomInput
    placeholder="Repeat Password" 
    value={passwordRepeat} 
    setValue={SetPasswordRepeat}
    secureTextEntry
    />
    
    <CustomButton text="Register" onPress={onRegisterPressed}/>

    <Text style={styles.text} onPress={OnTermsofUsePressed}>Ao se registrar, você confirma que aceita os nossoss<Text style={[styles.hyperlinkStyle,styles.link]} onPress= {() => {
      Linking.openURL('https://aboutreact.com')
    }
    }> Termos de Uso</Text> e 
    <Text style={[styles.hyperlinkStyle,styles.link]} onPress= {() => {
      Linking.openURL('https://aboutreact.com')
    }
    
    }> Política de Privacidade</Text></Text>

    <SocialSignInButtons/>
    <CustomButton text="Have an account? Sign in " onPress={onSignInPressed} type="TERTIARY"/>

  </View>
  </ScrollView>

  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  
  },
  link: {
    color: '#FDB075',
    
    
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default SignUpScreen;