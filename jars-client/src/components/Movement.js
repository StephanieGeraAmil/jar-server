import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { deleteMovement} from '../actions/MovementsActions.js'
import { movementSelected, settingFormPurposeToEdit} from '../actions/currentSelectionActions.js'

 const Movement = ({movement}) => {
    const dispatch= useDispatch();
    const selectorJarSelected=
        (state) =>(state.jars ? state.jars :null);
    const jars = useSelector(selectorJarSelected);

   

     const sign=movement.amount>0?'+':'-'

     const edit=()=>{
        dispatch(movementSelected(movement));
        dispatch(settingFormPurposeToEdit());
     }
    
    
    return (
        <div className="movement">
            
            <h4 className="movement_column info_movement">{movement.concept}</h4>
            <h4 className="movement_column info_movement">{sign}${Math.abs(movement.amount)}</h4>
            
            <h4 className="movement_column info_movement jars_asociated">{jars.filter(jar=>movement.jar.indexOf(jar._id)!=-1).map(jar=>jar.name + ", ")}</h4>
             <div className="movement_column">
                    <div  className="movement_actions div_img" style={{
                            backgroundImage: `url("/imgs/edit.png")`
                            }} onClick={()=>{edit();}}>
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
