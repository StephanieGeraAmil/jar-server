import './styles/styles.css';
import React, { useEffect, useState } from 'react';
import AddButtonsSection from './components/AddButtonsSection';
import MidSection from './components/MidSection';
import JarsSection from './components/JarsSection';
import MovementsHistorySection from './components/MovementsHistorySection';
import { useDispatch } from 'react-redux';
import {getMovements} from './actions/MovementsActions.js'
import {getJars} from './actions/JarsActions.js'
import MovementForm from './components/MovementForm';
import JarForm from './components/JarForm';
const App = () =>{
  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(getMovements());
    dispatch(getJars());},
    []);
  //dispatches an action
  return (
    <div className="App">
      {/* <AddButtonsSection/> */}
      <MidSection/>
      <MovementsHistorySection/>
      <JarsSection/>
      <MovementForm/>
      <JarForm/>
    </div>
  );
}

export default App;
