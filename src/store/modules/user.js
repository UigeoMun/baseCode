//@flow

import {createAction, handleActions, type ActionType} from 'redux-actions';
import produce from 'immer';
import * as AuthAPI from '../../lib/api/auth';
import { type User, type CurrentUser } from '../../lib/data/user';


// ACTION TYPE 

const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';
const SIGNUP = 'user/SIGNUP';


 // ACTION CREATORS INTERFACE
export interface UserActionCreators {
    login( id : string , pw : string ) : any;
    logout( id : string ) : any;
}

// ACTION CREATOR
const login = ( id: string, pw: string ) => (dispatch : any , getState : any ) => {
    //dispatch( { tpye : LOGIN_PENDING } );
    return AuthAPI.signIn( id, pw ).then(
        e=>dispatch( {type : LOGIN } ) 
    ).catch(
        // error => dispatch({type : LOGIN_FAIL}) 
    );
}

const logout = ( id : string ) => (dispatch : any, getState : any) => {
    //dispathc( {type : LOGOUT_PENDING} );
    return AuthAPI.logout(id).then(
        result=>dispatch({type : LOGOUT})
    ).catch(
        //error => dispatch({type : LOGOUT_FAIL})
    );
}

const signup = ( id: string , pw : string, name : string ) => (dispatch : any, getState : any) => {
    //dispatch( {type: SIGNUP_PENDING} );
    return AuthAPI.signUp(id, pw, name).then(
        result=>dispatch({type : SIGNUP})
    ).catch(
        //error => dispatch({type : SIGNUP_FAIL})
    );
}


// ACTION FLOW TYPES
type loginAction = ActionType<typeof login>;
type logoutAction = ActionType<typeof logout>;



//EXPORT ACTION CREATOR
export const actionCreators: UserActionCreators = {
    login,
    logout,  
}


const initialState : CurrentUser = {
    id : null,
    name : null,
}

const reducer = handleActions({
    [LOGIN] : (state, action: loginAction) => {
        return produce( state, (draft)=>{
            draft = action.payload
        });
    },
    [LOGOUT] : (state, action: logoutAction) => {
        return produce( state, (draft)=>{
            draft = initialState
        })
    },
    [SIGNUP] : ( state, action ) => {
        return produce( state, (draft)=>{
            draft = initialState
        })
    }
}, initialState);

export default reducer;