import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import gStyle from '../styles/globalStyles';
import {TButton} from '../components/Elements';

const SignupScreen = ({navigation})=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={[gStyle.margin10,styles.view]}>
            <Text style={[gStyle.h1, gStyle.alignCenter, styles.signUpText]}>Sign Up for Tracker</Text>
            
            <TextInput 
                placeholder="Email" 
                style={gStyle.inputText}
                value={email}
                onChangeText={(value)=>setEmail(value)}
                autoCapitalize='none'
                autoCorrect={false}
                autoCompleteType='email'
            />
            <TextInput 
                placeholder="Password" 
                style={gStyle.inputText}
                value={password}
                onChangeText={(value)=>setPassword(value)}
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry
            />

            <TButton 
                title="Sign Up" 
                buttonStyles={[
                    gStyle.marginBtm10,
                    {marginTop:20}
                ]} 
            />
            
            <TButton 
                title="Go to Sign in" 
                buttonStyles={[
                    gStyle.marginBtm10,
                    {backgroundColor:'#3d61ad'}
                ]} 
                onPress={()=>navigation.navigate('Signin')}
            />
            
            <TButton 
                title="Go to main flow" 
                buttonStyles={[
                    gStyle.marginBtm10,
                    {backgroundColor:'#81e1af'}
                ]}
                textStyle={[
                    {color:'#000'}
                ]} 
                onPress={()=>navigation.navigate('mainFlow')}/>

        </View>
    );
};

SignupScreen.navigationOptions = ()=>{
    return {
        headerShown:false
    };
};


const styles = StyleSheet.create({ 
    view:{
        flex:1,
        justifyContent:'center'
    },
    signUpText:{
        marginBottom:30
    }
});

export default SignupScreen;