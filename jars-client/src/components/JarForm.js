import React ,{useState, useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {createJar,updateJar} from '../actions/JarsActions.js'
import {clearJarSelected} from '../actions/currentSelectionActions.js'

 const JarForm = () => {
     const [jarData, setJarData]=useState({
         percentage:0,
         name:''

     })
    const dispatch= useDispatch();
   


   
    const selector=
        (state) =>(state.currentSelection.jar ? state.currentSelection.jar :null);
    const jarSelected = useSelector(selector);
       
    useEffect(() => {
       
    if (jarSelected!=null) {
       setJarData({percentage:jarSelected.percentage, name: jarSelected.name});
     }else{
         setJarData({percentage:"", name:""});
     }
    }, [jarSelected]);     

  
    const handleSubmit=(e)=>{
        e.preventDefault();

        if (jarSelected) {
            dispatch(updateJar({_id:jarSelected._id,...jarData}));
            dispatch(clearJarSelected());
        }else{
             dispatch(createJar(jarData));
        }
       
        };

  
    return (
        <div className="form">
          <form onSubmit={handleSubmit}>
              <div className="form-group"> 
                  <label className="m-2">Name: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={jarData.name}
                      onChange={(e)=>setJarData({...jarData, name:e.target.value})}
                      />
              </div>
              <div className="form-group">
                  <label className="m-2">Percentage: </label>
                  <input 
                      type="text" 
                      className="form-control"
                      value={jarData.percentage}
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
