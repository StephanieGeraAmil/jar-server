import React,{useState} from 'react'

import {useDispatch, useSelector} from 'react-redux';
import { deleteJar} from '../actions/JarsActions.js'
import { jarSelected, settingFormPurposeToEditJar, settingFormPurposeToTransferMoneyToJar} from '../actions/currentSelectionActions.js'
import { AvaiableOnJar } from './AvaiableOnJar.js';


export const Jar = ({jar,section}) => {
    const dispatch= useDispatch();
    const movements=useSelector((state)=>state.movements);  
    const transferences=useSelector((state)=>state.transactions);
    const [validationMessage, setValidationMessage]=useState('')

    const handleDeleteJar=()=>{
       
        const arrayOfJarsUsedOnMovements=movements.map(item=>item.jar.find(element=>element._id==jar._id)?item.jar:null)
        if(arrayOfJarsUsedOnMovements.find(element=>element!=null)==null){
          //checking if there are movements asociated
             if(transferences.find(item=>(item.origin==jar._id || item.destination==jar._id))==null){ 
                 
                dispatch(deleteJar(jar._id));
             }else{
                 setValidationMessage("You can't delete this Jar because there are transactions associated with this Jar");
                
                 
            }
        }else{
            setValidationMessage("You can't delete this Jar because there are movements associated with this Jar");

        }

    }
   
    const edit=()=>{
        dispatch(jarSelected(jar));
        dispatch(settingFormPurposeToEditJar());
     }
      const transfer=()=>{
        dispatch(jarSelected(jar));
        dispatch(settingFormPurposeToTransferMoneyToJar());
     }
 
    return (
        <div className="jar">
            <div className="top_of_jar">
                <h4 className="name_jar">{jar.name}</h4>
                <h5 className="percentace_jar">%{jar.percentage}</h5>
            </div>

           
            <div className="bottom_of_jar">
                 <AvaiableOnJar jar={jar}/>
                <div className="jar_actions_container">
                    {(section=='distribution') ? <> <div  className="jar_actions div_img" style={{
                                                    backgroundImage: `url("/imgs/edit.png")`
                                                    }} onClick={()=>{edit();}}>
                                                    </div>
                                                    <div  className="jar_actions div_img" style={{
                                                    backgroundImage: `url("/imgs/delete.png")`
                                                    }} onClick={()=>{handleDeleteJar();}}>
                                                    </div>
                                                </> 
                                :
                                
                                <div  className="jar_actions div_img" style={{
                                backgroundImage: `url("/imgs/arrowsIcon.png")`
                                }} onClick={()=>{transfer();}}>
                                </div>}
                    
                </div>

            </div>
        </div>
    )
}
