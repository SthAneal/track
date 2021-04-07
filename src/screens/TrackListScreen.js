import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const TrackLlistScreen = ({navigation})=>{
    return (
        <>
            <Text>TrackLlistScreen</Text>
            <Button title="Go to track detail" onPress={()=>navigation.navigate('TrackDetail')}/>
            <Button title="Go to login flow" onPress={()=>navigation.navigate('loginFlow')}/>

        </>
    );
};

const styles = StyleSheet.create({

});

export default TrackLlistScreen;