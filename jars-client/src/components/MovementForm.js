import React ,{useState,useEffect} from 'react'
import * as actions from '../actions/MovementsActions.js'
import {clearMovementSelected} from '../actions/currentSelectionActions.js'
import { useDispatch , useSelector} from 'react-redux';

 const MovementForm = () => {
     const [movementData, setMovementData]=useState({
         amount:0,
         concept:'',
         jar:'',
         is_income:false

     })
    const[actionBeingPerformed,setActionBeingPerformed]=useState("Add Income")
    const dispatch= useDispatch();
     
   
    const selector=
        (state) =>(state.currentSelection.movement ? state.currentSelection.movement :null);
    const movementSelected = useSelector(selector);
       
    useEffect(() => {  
        
        if (movementSelected!=null) {
            setMovementData({concept:movementSelected.concept, amount: movementSelected.amount, jar:movementSelected.jar, is_income:movementSelected.is_income});
            setActionBeingPerformed("Edit");
        }else{
            setMovementData({...movementData, concept:"", amount:"", jar:""});
            setActionBeingPerformed("Add Income");
        }
    }, [movementSelected]);
  
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (movementSelected) {
           
            dispatch(actions.updateMovement({_id:movementSelected._id,...movementData}));
            dispatch(clearMovementSelected());
         
        }else{
            dispatch(actions.createMovement(movementData));
            setMovementData({...movementData,concept:"", amount:"", jar:""});
        }
        
        };
        
  
    return (
        <div className="form">
          <form onSubmit={handleSubmit}>
              <div className="form-group"> 
                  <label className="m-2">Concept: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={movementData.concept}
                      onChange={(e)=>setMovementData({...movementData, concept:e.target.value})}
                      />
              </div>
              <div className="form-group">
                  <label className="m-2">Amount: </label>
                  <input 
                      type="text" 
                      className="form-control"
                      value={movementData.amount}
                      onChange={(e)=>setMovementData({...movementData, amount:e.target.value})}
                      />
              </div>
              <div className="form-group">
                  <label className="m-2">Jar: </label>
                  <input 
                      type="text" 
                      className="form-control"
                      value={movementData.jar}
                      onChange={(e)=>setMovementData({...movementData, jar:e.target.value})}
                      />
              </div>
              <div className="form-group mt-5">
                <input type="submit" value={actionBeingPerformed} className="submitButton" />
              </div>           
          </form>
        </div>
    )
}
export default MovementForm;
