import React, {useState, useContext, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {NavigationEvents} from 'react-navigation';

import gStyle from '../styles/globalStyles';
import CustomEmelents from '../components/Elements';
import {Context as AuthContext} from '../context/AuthContext';

const {TButton} = CustomEmelents();

const SignupScreen = ({navigation})=>{
    const {state, signUp, resetErrorMsg} = useContext(AuthContext);

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={[gStyle.margin10,styles.view]}>
            <NavigationEvents onWillFocus={()=>resetErrorMsg('')} />

            <Text style={[gStyle.h1, gStyle.alignCenter, styles.signUpText]}>Sign Up for Tracker</Text>
            
            <TextInput 
                placeholder="Name" 
                style={gStyle.inputText}
                value={name}
                onChangeText={(value)=>setName(value)}
                autoCapitalize='none'
                autoCorrect={false}
            />

            <TextInput 
                placeholder="Age" 
                style={gStyle.inputText}
                value={age}
                onChangeText={(value)=>setAge(value)}
                autoCapitalize='none'
                autoCorrect={false}
            />

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

            {state.errorMessage?<Text style={[gStyle.alignCenter, gStyle.colorRed,gStyle.marginBtm10]}>{state.errorMessage}</Text>: null}


            <TButton 
                title="Sign Up" 
                type="button"
                buttonStyles={[
                    gStyle.marginBtm10,
                    {marginTop:20}
                ]} 
                onPress={()=>signUp({name, age, email, password})}
            />
            
            <TButton 
                title="Already have an account? Sign in" 
                buttonStyles={[
                    gStyle.marginBtm20,
                    gStyle.marginTop20
                ]} 
                textStyle={{color:'blue', textTransform:'none'}}
                onPress={()=>navigation.navigate('Signin')}
            />
            
            <TButton 
                title="Go to main flow" 
                type="button"
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