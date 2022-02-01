import React ,{useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {updateJar} from '../actions/JarsActions.js'
import JarForm from './JarForm.js';
import JarSection from './JarsSection.js'
import { NavigationBar } from './NavigationBar.js';
import * as selectionActions from '../actions/currentSelectionActions.js'

 const JarDistribution = () => {
    const [updatedJars, setUpdatedJars]=useState([])

    const dispatch= useDispatch();
    const selectorJarSelected=
        (state) =>(state.jars ? state.jars :null);
    const jars = useSelector(selectorJarSelected);

    useEffect(()=>{
         setUpdatedJars(jars);
   
    },[jars])
   
   

    const handleSubmit=(e)=>{
        e.preventDefault();
        updatedJars.map(jar=>
            dispatch(updateJar(jar))); 
         
       };

    const handleUpdate=(e)=>{
       // updatedJars.map(updatedJar=> updatedJar._id==jar._id ? updatedJar.percentage=e.target.value)
    }

  
    return (
        <div className="distribution_page">
        <JarForm/>
        <JarSection/>
        <div className="form">
          <form onSubmit={handleSubmit}>
              {jars.map(jar=>{
               return ( 
              <div className="form-group"> 
                  <label className="m-2">{jar.name} </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={jar.percentage}
                      onChange={(e)=>handleUpdate(e)}
                      />
              </div>
              )}
              )
            }
              
              <div className="bottom mt-5">
                <input type="submit" value="Save" className="submitButton" />
                 <input className="submitButton cancel" readOnly value="Cancel" onClick={()=>{ }}/>
              </div>            
          </form>
        </div>
        <NavigationBar/>
        </div>
    )
}
export default JarDistribution;
