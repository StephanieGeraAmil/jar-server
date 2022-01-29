import React ,{useState,useEffect} from 'react'
import * as movementActions from '../actions/MovementsActions.js'
//import * as jarActions from '../actions/MovementsActions.js'
import * as selectionActions from '../actions/currentSelectionActions.js'
import { useDispatch , useSelector} from 'react-redux';

 const MovementForm = () => {
     const [movementData, setMovementData]=useState({
         amount:'',
         concept:'',
         jar:[],
        
         id:''

     })
 
    const dispatch= useDispatch();
     
     const selectorJarSelected=
        (state) =>(state.jars ? state.jars :null);
    const jars = useSelector(selectorJarSelected);

   
    const selectorMovementSelected=
        (state) =>(state.currentSelection.movement ? state.currentSelection.movement :null);
    const movementSelected = useSelector(selectorMovementSelected);

    const selectorFormPurpose=
        (state) =>(state.currentSelection.formPurpose ? state.currentSelection.formPurpose :null);
    const actionBeingPerformed = useSelector(selectorFormPurpose);
       
    useEffect(() => {  
        
        if (movementSelected!=null) {
            setMovementData({concept:movementSelected.concept, amount: movementSelected.amount, jar:movementSelected.jar});
        
        }else{
            setMovementData({...movementData, id:"",concept:"", amount:'', jar:[]});

        }
    }, [movementSelected]);
  
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (movementSelected) {
        
   
            dispatch(movementActions.updateMovement({_id:movementSelected._id,...movementData}));
            dispatch(selectionActions.clearMovementSelected());
            dispatch(selectionActions.clearFormPurpose());
         
        }else{
           
            dispatch(movementActions.createMovement(movementData));
            setMovementData({...movementData,concept:"", amount:'', jar:[]});
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
                  {/* <input 
                      type="text" 
                      className="form-control"
                      value={movementData.jar}
                      onChange={(e)=>setMovementData({...movementData, jar:e.target.value})}
                      /> */}
                    <select  className="form-control dropdown" value={movementData.jar}   onChange={(e)=>setMovementData({...movementData, jar:e.target.value})}>
                        {jars.map(item=><option  key={item._id}>{item.name}</option>)}
                    </select>



              </div>



              <div className="form-group mt-5">
                <input type="submit" value={actionBeingPerformed?actionBeingPerformed:"Button"} className="submitButton" />
                 <input className="submitButton cancel" readOnly value="Cancel" onClick={()=>{ dispatch(selectionActions.clearFormPurpose());}}/>
              </div>  
              
         
          </form>
        </div>
    )
}
export default MovementForm;
