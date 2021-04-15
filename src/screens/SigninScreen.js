import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {NavigationEvents} from 'react-navigation';
//import {withNavigation} from 'react-navigation';

import gStyle from '../styles/globalStyles';
import CustomEmelents from '../components/Elements';

import {Context as AuthContext} from '../context/AuthContext';

const {TButton} = CustomEmelents();

const SigninScreen = ({navigation})=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {state, signIn, resetErrorMsg} = useContext(AuthContext);
    
    /* useEffect(()=>resetErrorMsg(''),[]); */

    return (
        <View style={[gStyle.margin10,styles.view]}>
            <NavigationEvents onWillFocus={()=>resetErrorMsg('')} />

            <Text style={[gStyle.h1, gStyle.alignCenter, styles.signInText]}>Sign In</Text>
            <TextInput 
                placeholder="Email" 
                style={gStyle.inputText}
                value={email}
                onChangeText={setEmail}
                autoCapitalize='none'
                autoCorrect={false}
                autoCompleteType='email'
            />

        <TextInput 
                placeholder="Password" 
                style={gStyle.inputText}
                value={password}
                onChangeText={setPassword}
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry
            />

        {state.errorMessage?<Text style={[gStyle.alignCenter, gStyle.colorRed,gStyle.marginBtm10]}>{state.errorMessage}</Text>: null}


        <TButton 
            title="Sign In" 
            type="button"
            buttonStyles={[
                gStyle.marginBtm10,
                {marginTop:20}
            ]} 
            onPress={()=>signIn({email, password})}
        />

        <TButton 
            title="Don't have an account? Sign up instead"
            buttonStyles={[
                gStyle.marginTop20
            ]} 
            textStyle={{color:'blue', textTransform:'none'}}
            onPress={()=>navigation.navigate('Signup')}
        />

        </View>
    );
};

SigninScreen.navigationOptions = ()=>{
    return {
        headerShown: true
    }
}

const styles = StyleSheet.create({ 
    view:{
        marginTop:200
    },
    signInText:{
        marginBottom:30
    }
});

export default SigninScreen;
//export default withNavigation(SigninScreen);