import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default ()=>{
    const TButton = ({buttonStyles, textStyle, onPress, title, type})=>{
        return(
            <TouchableOpacity onPress={onPress} style={[type==='button'?styles.button:null, buttonStyles]}>
                <Text style={[styles.buttonText, textStyle]}>{title}</Text>
            </TouchableOpacity>
        )
    }

    
    const styles = StyleSheet.create({
        button:{
            backgroundColor:'#6c95ec',
            padding:10
        },
        buttonText:{
            color: 'white',
            textAlign:'center'
        }
    });

    return {TButton}
}


