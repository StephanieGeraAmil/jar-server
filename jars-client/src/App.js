import './styles/styles.css';
import React, { useEffect, useState } from 'react';
import Panel from './components/Panel';
import JarsSection from './components/JarsSection';
import MovementsHistorySection from './components/MovementsHistorySection';
import { useDispatch,useSelector } from 'react-redux';
import {getMovements} from './actions/MovementsActions.js'
import {getJars} from './actions/JarsActions.js'
import MovementForm from './components/MovementForm';
import JarForm from './components/JarForm';
import JarMoneyTransfer from './components/JarMoneyTransfer';


const App = () =>{
  const dispatch= useDispatch();
  const selectorFormPurpose=
        (state) =>(state.currentSelection.formPurpose ? state.currentSelection.formPurpose :null);
  const actionBeingPerformed = useSelector(selectorFormPurpose);
  let formToBeDisplayed;
  useEffect(()=>{
    dispatch(getMovements());
    dispatch(getJars());
    },
   
    []);
  //dispatches an action
  return (
    <div className="App">
      {(() => {
        switch(formToBeDisplayed){
          case 'Add Income':<MovementForm/>
          case 'Add Expense':<MovementForm/>
          case 'Edit':<MovementForm/>
          case 'Add Jar':<JarForm/>
          case 'TransferMoney':<JarMoneyTransfer/>
          default : <></>
      }
      })()}
      <Panel/>
      {actionBeingPerformed&&<MovementForm/>}
      <MovementsHistorySection/>
      <JarsSection/>
      <JarForm/>

      {}
      
    </div>
  );
}

export default App;
