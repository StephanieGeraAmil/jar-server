import './styles/styles.css';
import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';


import {getMovements} from './actions/MovementsActions.js'
import {getJars} from './actions/JarsActions.js'
import { getTransferences } from './actions/TransferActions';



import {Dashboard} from './components/Dashboard';
import MovementForm from './components/MovementForm';
import JarMoneyTransfer from './components/JarMoneyTransfer';
import { NavigationBar } from './components/NavigationBar';
import { DistributionForm } from './components/DistributionForm.js';
import JarForm from './components/JarForm.js';




const App = () =>{
  const dispatch= useDispatch();
  const selectorFormPurpose=
        (state) =>(state.currentSelection.formPurpose ? state.currentSelection.formPurpose :null);
 
  const formToBeDisplayed= useSelector(selectorFormPurpose);
  useEffect(()=>{
    dispatch(getMovements());
    dispatch(getJars());
     dispatch(getTransferences());
    },
   
    []);

 

  return (
    <div className="App">
    
      <Dashboard/>
      {(() => {
       
            switch(formToBeDisplayed){
              case 'Add Income': return <MovementForm/>
              case 'Add Expense': return <MovementForm/>
              case 'Edit Movement': return <MovementForm/>
              case 'Transfer Money': return <JarMoneyTransfer/>
              case 'Edit Jar': return <JarForm/>
              case 'Add Jar': return <JarForm/>
              case 'Distribute Percentage': return <DistributionForm/>
                
              default : return null
            }
          })()
      }
      {/* <NavigationBar/> */}
      
    </div>
  );
}

export default App;
