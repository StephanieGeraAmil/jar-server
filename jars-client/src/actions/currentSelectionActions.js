import * as actions from '../constants/actionTypes'
export const movementSelected=(currentSelection)=>(dispatch)=>{
    try {
       
        const action={type: actions.SELECTED_MOVEMENT, payload:currentSelection};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}
export const clearMovementSelected=()=>(dispatch)=>{
    try {
       
        const action={type: actions.UNSELECTED_MOVEMENT};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}
export const jarSelected=(currentSelection)=>(dispatch)=>{
    try {
       
        const action={type: actions.SELECTED_JAR, payload:currentSelection};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}
export const clearJarSelected=()=>(dispatch)=>{
    try {
       
        const action={type: actions.UNSELECTED_JAR};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}
export const settingFormPurposeToIncome=()=>(dispatch)=>{
    try {
       
        const action={type: actions.SETTING_FORM_FOR_INCOME};
       
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}
export const settingFormPurposeToExpense=()=>(dispatch)=>{
    try {
       
        const action={type: actions.SETTING_FORM_FOR_EXPENSE};
        
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}
export const settingFormPurposeToEdit=()=>(dispatch)=>{
    try {
       
        const action={type: actions.SETTING_FORM_FOR_EDIT};
    
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}
export const clearFormPurpose=()=>(dispatch)=>{
    try {
       
        const action={type: actions.CLEAR_FORM_PURPOSE};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}