import React ,{useState, useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {createJar,updateJar} from '../actions/JarsActions.js'
import {clearJarSelected,clearFormPurpose, settingFormPurposeToDistributePercentagesOfJars} from '../actions/currentSelectionActions.js'


 const JarForm = () => {
     const [jarData, setJarData]=useState({
         percentage:0,
         balance:0,
         name:''

     })
    const [validationMessage, setValidationMessage]=useState('')
    const dispatch= useDispatch();
   
    const jars = useSelector((state) =>(state.jars ? state.jars :null));
    const jarSelected = useSelector((state) =>(state.currentSelection.jar ? state.currentSelection.jar :null));
       
    useEffect(() => {
       
    if (jarSelected!=null) {
       setJarData({percentage:jarSelected.percentage, balance: jarSelected.balance, name: jarSelected.name});
     }else{
         setJarData({...jarData,percentage:"", name:""});
     }
    }, [jarSelected]);     

  
    const handleSubmit=(e)=>{
        e.preventDefault();

        if(jars.find(jar=>jar.name==jarData.name)!=null && jarSelected==null){
            setValidationMessage("There already is a Jar  with that name, please choose another one");

        }else{  setValidationMessage('');}
      
        if (jarSelected) {
            dispatch(updateJar({_id:jarSelected._id,...jarData}));
            dispatch(clearJarSelected());
            dispatch(clearFormPurpose());
            
        }else{
            dispatch(createJar(jarData));
            setJarData({...jarData, percentage:"", name:""});
            dispatch(clearFormPurpose());
            dispatch(settingFormPurposeToDistributePercentagesOfJars());
            
        }
        // 
        
       
    };
    const handleCancel=()=>{
        dispatch(clearFormPurpose());
        dispatch(clearJarSelected());
    }

  
    return (
        <div className="form">
          <label className="m-2 validation_message">{validationMessage} </label>
          <form onSubmit={handleSubmit}>
              <div className="form-group"> 
                  <label className="m-2">Name: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={jarData.name}
                      onChange={(e)=>setJarData({...jarData, name:(e.target.value).toUpperCase()})}
                      />
              </div>
             { jarSelected==null && <div className="form-group">
                  <label className="m-2">Percentage: </label>
                  <input 
                      type="text" 
                      className="form-control"
                      value={jarData.percentage}
                      onChange={(e)=>setJarData({...jarData, percentage:e.target.value})}
                      />
              </div>}
         
            

              <div className="bottom mt-5">
                <input type="submit" value={ jarSelected==null? "Add Jar":"Edit"}className="submitButton" />
                                <input className="submitButton cancel" readOnly value="Cancel" onClick={()=>{handleCancel() }}/>
              </div>            
          </form>
        </div>
    )
}
export default JarForm;
