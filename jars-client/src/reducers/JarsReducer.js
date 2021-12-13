import {FETCH_ALL_JARS,CREATE_JAR,UPDATE_JAR} from '../constants/actionTypes'
export default (jars=[], action)=>{
    switch(action.type){
        case CREATE_JAR:
        return [...jars, action.payload];
        
        case UPDATE_JAR:
        return jars.map((jar)=>jar._id===action.payload._id? action.payload: jar);
        
        case FETCH_ALL_JARS:
        return action.payload;
        
        
        default:
        return jars;
    }


}