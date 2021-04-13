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
        case 'RESET_ERROR_MSG':
            return {...state, errorMessage: action.payload}
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
    return async ({email, password})=>{
        try {   
            const response = await trackerApi.post('/users/login', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type:'SIGN_IN', payload: response.data.toke});
            navigate('TrackList');
        } catch (error) {
            dispatch({type:'ADD_ERROR', payload:'Something went wrong, please try again!'});
        }
    };
};

const autoSignIn = (dispatch)=>{
    return async ()=>{
        const token = await AsyncStorage.getItem('token');
        try {
            const user = await trackerApi.get('/users/me',{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            });
            
            navigate('TrackList');
            
        } catch (err) {
            navigate('Signup');
        }
        
    };
};


const signOut = (dispatch)=>{
    return ()=>{

    };
};

const resetErrorMsg = (dispatch)=>{
    return (resetMessage)=>{
        dispatch({type:'RESET_ERROR_MSG', payload:resetMessage});
    };
};

export const {Provider, Context} = createDataContext(authReducer, {signUp, signIn, autoSignIn, signOut, resetErrorMsg}, {token:null, errorMessage:''});