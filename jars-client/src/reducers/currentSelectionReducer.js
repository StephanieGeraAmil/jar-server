import * as actions from '../constants/actionTypes'
export default (selected={movement: null, jar:null}, action)=>{
    switch(action.type){
        case  actions.SELECTED_MOVEMENT:
        return {...selected,movement: action.payload};
         
        case  actions.UNSELECTED_MOVEMENT:
        return {...selected,movement: null};
       
        case  actions.SELECTED_JAR:
        return {...selected,jar: action.payload};
       
        case  actions.UNSELECTED_JAR:
        return {...selected,jar: null};
        default:
        return selected;
    }


}