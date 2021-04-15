import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import gStyle from '../styles/globalStyles';
import {Context as AuthContext} from '../context/AuthContext';
import CustomEmelents from '../components/Elements';
const {TButton} = CustomEmelents();

const AccountScreen = ()=>{
    const {state, signOut} = useContext(AuthContext);
    return (
        <View style={[gStyle.margin10, gStyle.flex]}>
            {state.errorMessage?<Text style={[gStyle.alignCenter, gStyle.colorRed,gStyle.marginBtm10]}>{state.errorMessage}</Text>: null}
            
            <TButton
                title="Sign Out"
                type="button"
                onPress={signOut}
            />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default AccountScreen;