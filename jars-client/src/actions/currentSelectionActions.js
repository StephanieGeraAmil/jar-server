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
       console.log('clear the selected jar')
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
export const settingFormPurposeToAddJar=()=>(dispatch)=>{
    try {

        
        const action={type: actions.SETTING_FORM_FOR_ADDING_JAR};
        
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}
export const settingFormPurposeToEditMovement=()=>(dispatch)=>{
    try {
       
        const action={type: actions.SETTING_FORM_FOR_EDIT_MOVEMENT};
    
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}
export const settingFormPurposeToEditJar=()=>(dispatch)=>{
    try {
        console.log('dispatching the action of setting form purpose to edit jar')
        const action={type: actions.SETTING_FORM_FOR_EDIT_JAR};
    
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}


export const settingFormPurposeToTransferMoneyToJar=()=>(dispatch)=>{
    try {
       
        const action={type: actions.SETTING_FORM_FOR_TRANSER_MONEY};
    
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }

}
export const settingFormPurposeToDistributePercentagesOfJars=()=>(dispatch)=>{
    try {
       
         console.log('dispatching the set form to distribute percentages')
        const action={type: actions.SETTING_FORM_FOR_DISTRIBUTE_PERCENTAGES};
    
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}

export const clearFormPurpose=()=>(dispatch)=>{
    try {
       console.log('dispatching the clear form purpose action')
        const action={type: actions.CLEAR_FORM_PURPOSE};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}

