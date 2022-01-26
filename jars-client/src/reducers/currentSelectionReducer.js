import * as actions from '../constants/actionTypes'
export default (selected={}, action)=>{
    switch(action.type){
        case  actions.SELECTED_MOVEMENT:
        return {...selected,movement: action.payload};
         
        case  actions.SELECTED_JAR:
        return {...selected,jar: action.payload};
       
        default:
        return selected;
    }


}