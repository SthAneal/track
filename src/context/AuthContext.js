import AsyncStorage from "@react-native-community/async-storage";
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import {navigate} from '../navigationRef';


const authReducer = (state, action)=>{
    switch(action.type){
        case 'ADD_ERROR':
            return {...state, errorMessage: action.payload}
        case 'SIGN_UP':
            return {errorMessage:'', token: action.payload}
        default:
            return state;
    }
}

const signUp = (dispatch)=>{
    return async ({name, age, email, password})=>{
        try {
            const response = await trackerApi.post('/users', {name, age, email, password});
            await AsyncStorage.setItem('token',response.data.token);
            dispatch({type:'SIGN_UP',payload:response.data.token});
            navigate('TrackList');
        } catch (error) {
            dispatch({type:'ADD_ERROR', payload:'Something went wrong, please try again!'});
        }
    };
};

const signIn = (dispatch)=>{
    return ({email, password})=>{

    };
};

const signOut = (dispatch)=>{
    return ()=>{

    }
}


export const {Provider, Context} = createDataContext(authReducer, {signUp, signIn, signOut}, {token:null, errorMessage:''});