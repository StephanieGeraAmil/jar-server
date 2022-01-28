import React ,{useState,useEffect} from 'react'
import * as actions from '../actions/MovementsActions.js'
import * as selectionActions from '../actions/currentSelectionActions.js'
import { useDispatch , useSelector} from 'react-redux';

 const MovementForm = () => {
     const [movementData, setMovementData]=useState({
         amount:0,
         concept:'',
         jar:'',
         is_income:false,
         id:''

     })
   // const[actionBeingPerformed,setActionBeingPerformed]=useState("Add Income")
    const dispatch= useDispatch();
     
   
    const selectorMovementSelected=
        (state) =>(state.currentSelection.movement ? state.currentSelection.movement :null);
    const movementSelected = useSelector(selectorMovementSelected);

    const selectorFormPurpose=
        (state) =>(state.currentSelection.formPurpose ? state.currentSelection.formPurpose :null);
    const actionBeingPerformed = useSelector(selectorFormPurpose);
       
    useEffect(() => {  
        
        if (movementSelected!=null) {
            setMovementData({concept:movementSelected.concept, amount: movementSelected.amount, jar:movementSelected.jar, is_income:movementSelected.is_income});
            //setActionBeingPerformed("Edit");
            dispatch(selectionActions.settingFormPurposeToEdit());
        }else{
            setMovementData({...movementData, id:"",concept:"", amount:"", jar:""});
            //setActionBeingPerformed("Add Income");
            //dispatch(selectionActions.clearFormPurpose());
        }
    }, [movementSelected]);
  
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (movementSelected) {
           
            dispatch(actions.updateMovement({_id:movementSelected._id,...movementData}));
            dispatch(selectionActions.clearMovementSelected());
            dispatch(selectionActions.clearFormPurpose());
         
        }else{
            dispatch(actions.createMovement(movementData));
            setMovementData({...movementData,concept:"", amount:"", jar:""});
            dispatch(selectionActions.clearFormPurpose());
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
                <input type="submit" value={actionBeingPerformed?actionBeingPerformed:"Button"} className="submitButton" />
              </div>           
          </form>
        </div>
    )
}
export default MovementForm;
