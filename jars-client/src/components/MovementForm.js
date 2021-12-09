import React ,{useState} from 'react'
import { useDispatch } from 'react-redux';
import {createMovement} from '../actions/MovementsActions.js'

 const MovementForm = () => {
     const [movementData, setMovementData]=useState({
         amount:0,
         concept:'',
         jar:''

     })
    const dispatch= useDispatch();
    const amount=movementData.amount;
    const concept=movementData.concept;
    const jar=movementData.jar;
  
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(createMovement(movementData));
        };
        
  
    return (
        <div className="form">
          <form onSubmit={handleSubmit}>
              <div className="form-group"> 
                  <label className="m-2">Concept: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={concept}
                      onChange={(e)=>setMovementData({...movementData, concept:e.target.value})}
                      />
              </div>
              <div className="form-group">
                  <label className="m-2">Amount: </label>
                  <input 
                      type="text" 
                      className="form-control"
                      value={amount}
                      onChange={(e)=>setMovementData({...movementData, amount:e.target.value})}
                      />
              </div>
              <div className="form-group">
                  <label className="m-2">Jar: </label>
                  <input 
                      type="text" 
                      className="form-control"
                      value={jar}
                      onChange={(e)=>setMovementData({...movementData, jar:e.target.value})}
                      />
              </div>
              <div className="form-group mt-5">
                <input type="submit" value="Add Expense" className="submitButton" />
              </div>           
          </form>
        </div>
    )
}
export default MovementForm;
