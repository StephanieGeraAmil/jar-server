import * as api from '../api/api.js';
//action creators
export const getJars = ()=>async(dispatch)=>{
    try {
        const {data}= await api.fetchJars();
        const action={type:'FETCH_ALL_JARS', payload:data};
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
   
}
export const createJar=(jar)=>async(dispatch)=>{
    //async(dispatch) comes from redux-thunk
    try {
        const {data} = api.createJar(jar);
        const action={type:'CREATE_JAR', payload:data};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}