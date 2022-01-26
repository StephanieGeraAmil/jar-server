import * as actions from '../constants/actionTypes'
export const movementSelected=(currentSelection)=>async(dispatch)=>{
    try {
       
        const action={type: actions.SELECTED_MOVEMENT, payload:currentSelection};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}
export const jarSelected=(currentSelection)=>async(dispatch)=>{
    try {
       
        const action={type: actions.SELECTED_JAR, payload:currentSelection};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}