import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const TButton = ({buttonStyles, textStyle, onPress, title})=>{
    return(
        <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyles]}>
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
        textAlign:'center',
        textTransform:'uppercase'
    }
});

export  {TButton};