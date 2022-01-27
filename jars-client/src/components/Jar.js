import React from 'react'
import {useDispatch} from 'react-redux';
import { deleteJar} from '../actions/JarsActions.js'
import { jarSelected} from '../actions/currentSelectionActions.js'

export const Jar = ({jar}) => {
    const dispatch= useDispatch();
    
    return (
        <div className="jar">
            <h4 className="info_jar">{jar.name}</h4>
            <div  className="jar_img div_img" style={{
                    backgroundImage: `url("/imgs/jar3.png")`
                    
                    }}>
            </div>
             <h4 className="info_jar">${jar.budget}</h4>
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
    )
}
