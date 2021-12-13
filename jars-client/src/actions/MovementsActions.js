import * as api from '../api/api.js';
//action creators
export const getMovements = ()=>async(dispatch)=>{
    try {
        const {data}= await api.fetchMovements();
        const action={type:'FETCH_ALL_MOVEMENTS', payload:data};
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
   
}
export const createMovement=(movement)=>async(dispatch)=>{
    //async(dispatch) comes from redux-thunk
    try {
        const {data} = api.createMovement(movement);
        const action={type:'CREATE_MOVEMENT', payload:data};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}
export const updateMovement=(updatedMovement)=>async(dispatch)=>{
    try {
        const {data} = api.updateMovement(updatedMovement);
        const action={type:'UPDATE_MOVEMENT', payload:data};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}


