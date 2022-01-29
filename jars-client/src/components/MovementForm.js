import React ,{useState,useEffect} from 'react'
import * as movementActions from '../actions/MovementsActions.js'
import * as jarActions from '../actions/JarsActions.js'
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
            // const wasExpense=(movementSelected.amount<0);
            // const isExpenseNow=(movementData.amount.slice(0,1)=='-');
     
            // if(wasExpense!=isExpenseNow){
            //     console.log("you cant change the type of movement, you can delete the old one and create a new one")
            //     return}
            // const diff=movementData.amount-movementSelected.amount;
            dispatch(movementActions.updateMovement({_id:movementSelected._id,...movementData}));
            
            // movementSelected.jar.map(item=>{
            //    const actualJar= jars.find(element=>element._id==item)
            //    const amountToTheJar= (actualJar.percentage*diff)/100+actualJar.balance;
            //    console.log(amountToTheJar);
            //    dispatch(jarActions.updateJar({...actualJar,balance:amountToTheJar}));    
            // });
            dispatch(selectionActions.clearMovementSelected());
            dispatch(selectionActions.clearFormPurpose());
         
        }else{
          
            // movementData.jar.map(item=>{
                
            //    const actualJar= jars.find(element=>element==item)
              
            //    let amountToTheJar;
            //    if(actionBeingPerformed=="Add Expense"){
            //        amountToTheJar= movementData.amount/movementData.jar.length+actualJar.balance;
            //    }else{
            //        if(movementData.jar.length!=jars.length){ 
            //            console.log(" Incomes need to be aplied to all the jars")
            //            return
            //         }
            //     amountToTheJar= (actualJar.percentage*movementData.amount)/100+actualJar.balance;
            //    }
               
            //    dispatch(jarActions.updateJar({...actualJar,balance:amountToTheJar}));    
            // });
            dispatch(movementActions.createMovement(movementData));
          
            setMovementData({...movementData,concept:"", amount:'', jar:[]});
            dispatch(selectionActions.clearFormPurpose());
        }
        
    };
    const handleCheck = (e) => {
    let updatedList = [...movementData.jar];
  
    if (e.target.checked) {
      updatedList = [...movementData.jar, jars.find(item=>item._id==e.target.value)];
    } else {
      updatedList.splice(movementData.jar.filter(item=>item._id!=e.target.value), 1);
    }
    setMovementData({...movementData, jar:updatedList})
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
              <div className="form-group jars_list">
                  <label className="m-2">Jar: </label>
                
                    <div className="checkbox_list"> 
                     {jars.map( item => <div  key={item._id} className="checkbox_item" >
                                    <input value={item._id} type="checkbox"  onChange={(e)=>handleCheck(e)} checked={movementData.jar.indexOf(item)!=-1 ?true:false}/> 
                                    <span>{item.name} </span>
                             </div>)}
                    </div>



              </div>

              <div className="bottom mt-5">
                <input type="submit" value={actionBeingPerformed?actionBeingPerformed:"Button"} className="submitButton" />
                 <input className="submitButton cancel" readOnly value="Cancel" onClick={()=>{ dispatch(selectionActions.clearFormPurpose());}}/>
              </div>  
              
         
          </form>
        </div>
    )
}
export default MovementForm;
