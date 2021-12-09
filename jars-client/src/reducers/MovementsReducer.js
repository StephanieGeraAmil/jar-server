export default (movements=[], action)=>{
    switch(action.type){
        case'CREATE':
        //return the action or the state changed by the action
        return [...movements, action.payload];
        
        case'FETCH_ALL':
        return action.payload;
        
        default:
        return movements
    }


}