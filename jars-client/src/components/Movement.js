import React from 'react'
import {useDispatch} from 'react-redux';
import { deleteMovement} from '../actions/MovementsActions.js'

 const Movement = ({movement}) => {
     const dispatch= useDispatch();
     console.log(movement);
    
 
    return (
        <div className="movement">
            
            <h4 className="movement_column info_movement">{movement.concept}</h4>
            <h4 className="movement_column info_movement">${movement.amount}</h4>
            
            <h4 className="movement_column info_movement">{movement.jar}</h4>
             <div className="movement_column">
                    <div  className="movement_actions div_img" style={{
                                backgroundImage: `url("/imgs/edit.png")`
                                }} onClick={()=>{}}>
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
