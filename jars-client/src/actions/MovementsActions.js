
import * as api from '../api/api.js';
import * as actions from '../constants/actionTypes';


//action creators
export const getMovements = ()=>async(dispatch)=>{
    try {
        const {data}= await api.fetchMovements();
        const action={type: actions.FETCH_ALL_MOVEMENTS, payload:data};
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
   
}
export const createMovement=(movement)=>async(dispatch,getState)=>{
    //async(dispatch) comes from redux-thunk
    try {
        const before = getState()
        console.log(' before dispatch: ', before)
        const {data} =await api.createMovement(movement);
          console.log('return from server: ', data)
        const action={type: actions.CREATE_MOVEMENT, payload:data};
        dispatch(action);
        const after = getState()
        console.log(' after dispatch: ', after)
        
    } catch (error) {
        console.log(error);
    }
    return{}
}



export const updateMovement=(updatedMovement)=>async(dispatch)=>{
  
    try {
        const {data} = await api.updateMovement(updatedMovement);
        const action={type: actions.UPDATE_MOVEMENT, payload:data};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}

export const deleteMovement=(movement_id)=>async(dispatch,getState)=>{
    try {
        const before = getState()
        console.log(' before dispatch: ', before)
        await api.deleteMovement(movement_id);
        const action={type: actions.DELETE_MOVEMENT,payload:movement_id};
        dispatch(action);
         const after = getState()
        console.log(' after dispatch: ', after)
        
    } catch (error) {
        console.log(error);
    }
}

