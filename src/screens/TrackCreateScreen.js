import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';

import gStyle from '../styles/globalStyles';
import Map from '../components/Map';

const TrackCreateScreen = ()=>{
    return (
        <SafeAreaView  forceInset={{top:'always'}} style={gStyle.marginTop20}>
            <View>
                <Text style={[gStyle.h1, gStyle.alignCenter]}>TrackCreateScreen</Text>
                <Map/>
            </View>
        </SafeAreaView>

       
       
    );
};

const styles = StyleSheet.create({
    view:{
        justifyContent:'flex-start'
    }
});

export default TrackCreateScreen;