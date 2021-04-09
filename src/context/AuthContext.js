import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action)=>{
    switch(action.type){
        case 'ADD_ERROR':
            return {...state, errorMessage: action.payload}
        default:
            return state;
    }
}

const signUp = (dispatch)=>{
    return async ({name, age, email, password})=>{
        try {
            const response = await trackerApi.post('/users', {name, age, email, password});
            console.log(response.data);    
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


export const {Provider, Context} = createDataContext(authReducer, {signUp, signIn, signOut}, {isSignedIn:false, errorMessage:''});