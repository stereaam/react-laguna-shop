import { signInWithGoogle } from "../../apis/firebase"
import { signOutAction} from "../../apis/firebase"
export function startLoading(){
    return {
        type: 'START_LOADING'
    }
}

export function updateUserData(payload){
    return {
        type: 'UPDATE_USER_DATA',
        payload
    }
}

export function updateUserError(payload){
    return{
        type: 'UPDATE_USER_ERROR',
        payload
    }
}

export function loginUser (){
    return (dispatch) => {
        dispatch(startLoading())
        signInWithGoogle().then( (userData) => {
            dispatch(updateUserData(userData.user.displayName))
        }).catch( (error) => {
            dispatch(updateUserError(error))
        })
    }
}
export function signOutUser(){
    return (dispatch) => {
        dispatch(startLoading())
        signOutAction().then( () => {
            dispatch(updateUserData(null))
        }).catch((error) => {
            dispatch(updateUserError(error))
        })
    }
}