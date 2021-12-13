export default (movements=[], action)=>{
    switch(action.type){
        case'CREATE_MOVEMENT':
        //return the action or the state changed by the action
        return [...movements, action.payload];
        
        case'UPDATE_MOVEMENT':
        return [movements];
        
        case'FETCH_ALL_MOVEMENTS':
        return action.payload;
        
        default:
        return movements
    }


}