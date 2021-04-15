import React, {useEffect, useContext} from 'react';
import {Context as AuthContext} from '../context/AuthContext';
import {View, Text, StyleSheet} from 'react-native';

import gStyle from '../styles/globalStyles';

const ResolveAuthScreen = ()=>{
    const {autoSignIn} = useContext(AuthContext);

    useEffect(()=>{
        autoSignIn();
    },[]);
    
    return (
        <View style={styles.flex}>
            <Text style={[gStyle.alignCenter, gStyle.colorRed]}>
                Checking credentials....
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    flex:{
        flex:1,
        justifyContent:'center'
    },
    text:{}
})

export default ResolveAuthScreen;