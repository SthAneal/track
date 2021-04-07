import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import globalStyles from '../styles/styles';

const {border2, margin10, padding10, colorRed} = globalStyles;

const SignupScreen = ({navigation})=>{
    return (
       <>
        <Text style={[border2,margin10,padding10, colorRed]}>Signup Screen</Text>
        <Button title="Go to Sign in" onPress={()=>navigation.navigate('Signin')}/>
        <Button title="Go to main flow" onPress={()=>navigation.navigate('mainFlow')}/>
       </>
    );
};

const styles = StyleSheet.create({ 

});

export default SignupScreen;