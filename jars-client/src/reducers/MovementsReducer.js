export default (movements=[], action)=>{
    switch(action.type){
        case'CREATE_MOVEMENT':
        //return the action or the state changed by the action
        return [...movements, action.payload];
        
        case'FETCH_ALL_MOVEMENTS':
             console.log('in the reducer of movements');
        console.log(action.payload);
        return action.payload;
        
        default:
        return movements
    }


}