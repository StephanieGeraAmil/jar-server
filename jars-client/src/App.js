import './styles/styles.css';
import React, { useEffect, useState } from 'react';
import AddButtonsSection from './components/AddButtonsSection';
import MidSection from './components/MidSection';
import JarsSection from './components/JarsSection';
import MovementsHistorySection from './components/MovementsHistorySection';
import { useDispatch,useSelector } from 'react-redux';
import {getMovements} from './actions/MovementsActions.js'
import {getJars} from './actions/JarsActions.js'
import MovementForm from './components/MovementForm';
import JarForm from './components/JarForm';

const App = () =>{
  const dispatch= useDispatch();
  const selectorFormPurpose=
        (state) =>(state.currentSelection.formPurpose ? state.currentSelection.formPurpose :null);
  const actionBeingPerformed = useSelector(selectorFormPurpose);
  useEffect(()=>{
    dispatch(getMovements());
    dispatch(getJars());
    
    },
   
    []);
  //dispatches an action
  return (
    <div className="App">
      {/* <AddButtonsSection/> */}
      <MidSection/>
      {actionBeingPerformed&&<MovementForm/>}
      <MovementsHistorySection/>
      <JarsSection/>
      <JarForm/>
    </div>
  );
}

export default App;
