import React from 'react'
import {useDispatch} from 'react-redux';
import { deleteMovement} from '../actions/MovementsActions.js'
import { movementSelected} from '../actions/currentSelectionActions.js'

 const Movement = ({movement}) => {
     const dispatch= useDispatch();

     const sign=movement.amount>0?'+':'-'
    
    return (
        <div className="movement">
            
            <h4 className="movement_column info_movement">{movement.concept}</h4>
            <h4 className="movement_column info_movement">{sign}${Math.abs(movement.amount)}</h4>
            
            <h4 className="movement_column info_movement">{movement.jar}</h4>
             <div className="movement_column">
                    <div  className="movement_actions div_img" style={{
                            backgroundImage: `url("/imgs/edit.png")`
                            }} onClick={()=>{dispatch(movementSelected(movement));}}>
                            </div>
                    <div  className="movement_actions div_img" style={{
                            backgroundImage: `url("/imgs/delete.png")`
                            }} onClick={()=>{dispatch(deleteMovement(movement._id));}}>
                            </div>
            </div>
        </div>
    )
}
export default Movement;
