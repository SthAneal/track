import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import globalStyles from '../styles/globalStyles';
import {TButton} from '../components/Elements';

const {border2, margin10,marginBtm10, padding10, colorRed, inputText} = globalStyles;

const SignupScreen = ({navigation})=>{
    return (
       <>
        <Text style={[border2,margin10,padding10, colorRed]}>Signup Screen</Text>
        <View style={margin10}>

            <TextInput placeholder="Email" style={[inputText]}/>
            <TextInput placeholder="Password" style={[inputText]}/>

            <TButton 
                title="new button" 
                buttonStyles={[
                    marginBtm10,
                    {backgroundColor:'red', marginTop:30}
                ]} 
            />
            
            
            <TButton 
                title="Go to Sign in" 
                buttonStyles={[
                    marginBtm10,
                    {backgroundColor:'#3d61ad'}
                ]} 
                onPress={()=>navigation.navigate('Signin')}
            />
            
            <TButton 
                title="Go to main flow" 
                buttonStyles={[
                    marginBtm10,
                    {backgroundColor:'#81e1af'}
                ]}
                textStyle={[
                    {color:'#000'}
                ]} 
                onPress={()=>navigation.navigate('mainFlow')}/>

        </View>
        
       </>
    );
};

const styles = StyleSheet.create({ 

});

export default SignupScreen;