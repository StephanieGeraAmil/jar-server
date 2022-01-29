import React ,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import * as transferActions from '../actions/TransferActions.js'
import * as selectionActions from '../actions/currentSelectionActions.js'

 const JarMoneyTransfer = ({originJar}) => {
    const [destinationJar, setDestinationJar]=useState({});
    const [amount, setAmount]=useState('');
    const dispatch= useDispatch();
       
    const selectorJarSelected=
        (state) =>(state.jars ? state.jars :null);
    const jars = useSelector(selectorJarSelected);
  
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addTransfer(originJar._id,destinationJar._id,amount));
        setDestinationJar({});
        };

  
    return (
        <div className="form">
          <form onSubmit={handleSubmit}>
              <div className="form-group"> 
                  <label className="m-2">Origin Jar: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={originJar.name}
                      readOnly={true}
                      />
              </div>
              <div className="form-group">
                  <label className="m-2">DestinationJar: </label>
                  <input 
                      type="text" 
                      className="form-control"
                      value={destinationJar._id}
                      onChange={(e)=>setDestinationJar(e.target.value)}
                      />
              </div>
                 <div className="form-group">
                  <label className="m-2">Amount: </label>
                  <input 
                      type="text" 
                      className="form-control"
                      value={jarData.percentage}
                      onChange={(e)=>setAmount(e.target.value)}
                      />
              </div>
         
            

              <div className="bottom mt-5">
                <input type="submit" value="Transfer" className="submitButton" />
                 <input className="submitButton cancel" readOnly value="Cancel" onClick={()=>{ }}/>
              </div>            
          </form>
        </div>
    )
}
export default JarMoneyTransfer;
