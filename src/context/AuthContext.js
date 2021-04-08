import createDataContext from './createDataContext';

const authReducer = (state, action)=>{
    switch(action.type){
        default:
            return {state};
    }
}

const signUp = (dispatch)=>{
    return ({name, age, email, password})=>{

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


export const {Provider, Context} = createDataContext(authReducer, {signUp, signIn, signOut}, {isSignedIn:false});