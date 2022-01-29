import React from 'react'

import {useDispatch} from 'react-redux';
import { deleteJar} from '../actions/JarsActions.js'
import { jarSelected} from '../actions/currentSelectionActions.js'
import { AvaiableOnJar } from './AvaiableOnJar.js';

export const Jar = ({jar}) => {
    const dispatch= useDispatch();
   
    
    return (
        <div className="jar">
            <div className="top_of_jar">
                <h4 className="name_jar">{jar.name}</h4>
                <h5 className="percentace_jar">%{jar.percentage}</h5>
            </div>
            <div  className="jar_img div_img" style={{
                    backgroundImage: `url("/imgs/jar3.png")`
                    
                    }}>
            </div>
           
            <div className="bottom_of_jar">
                 <AvaiableOnJar jar={jar}/>
                <div className="jar_actions_container">
                    <div  className="jar_actions div_img" style={{
                                backgroundImage: `url("/imgs/edit.png")`
                                }} onClick={()=>{dispatch(jarSelected(jar));}}>
                                </div>
                    <div  className="jar_actions div_img" style={{
                                backgroundImage: `url("/imgs/delete.png")`
                                }} onClick={()=>{dispatch(deleteJar(jar._id));}}>
                                </div>
                </div>

            </div>
        </div>
    )
}
