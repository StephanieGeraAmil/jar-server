import React ,{useState} from 'react'
import { useDispatch } from 'react-redux';
import {createJar} from '../actions/JarsActions.js'

 const JarForm = () => {
     const [jarData, setJarData]=useState({
         percentage:0,
         name:''

     })
    const dispatch= useDispatch();
    const name=jarData.name;
    const percentage=jarData.percentage;

  
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(createJar(jarData));
        };
        
  
    return (
        <div className="form">
          <form onSubmit={handleSubmit}>
              <div className="form-group"> 
                  <label className="m-2">Name: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={name}
                      onChange={(e)=>setJarData({...jarData, name:e.target.value})}
                      />
              </div>
              <div className="form-group">
                  <label className="m-2">Percentage: </label>
                  <input 
                      type="text" 
                      className="form-control"
                      value={percentage}
                      onChange={(e)=>setJarData({...jarData, percentage:e.target.value})}
                      />
              </div>
         
              <div className="form-group mt-5">
                <input type="submit" value="Add Jar" className="submitButton" />
              </div>           
          </form>
        </div>
    )
}
export default JarForm;
