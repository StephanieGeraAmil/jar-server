import {FETCH_ALL_JARS,CREATE_JAR,UPDATE_JAR} from '../constants/actionTypes'
import * as api from '../api/api.js';
//action creators
export const getJars = ()=>async(dispatch)=>{
    try {
        const {data}= await api.fetchJars();
        const action={type:FETCH_ALL_JARS, payload:data};
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
   
}
export const createJar=(jar)=>async(dispatch)=>{
    //async(dispatch) comes from redux-thunk
    try {
        const {data} = api.createJar(jar);
        const action={type:CREATE_JAR, payload:data};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}
export const updateJar=(updatedJar)=>async(dispatch)=>{
    try {
        const {data} = api.updateJar(updatedJar);
        const action={type:UPDATE_JAR, payload:data};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}