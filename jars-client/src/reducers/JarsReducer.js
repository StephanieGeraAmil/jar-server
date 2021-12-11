export default (jars=[], action)=>{
    switch(action.type){
        case'CREATE':
        //return the action or the state changed by the action
        return [...jars, action.payload];
        
        case'FETCH_ALL':
        console.log('in the reducer of jars');
        console.log(action.payload);
        return action.payload;
        
        default:
        return jars;
    }


}