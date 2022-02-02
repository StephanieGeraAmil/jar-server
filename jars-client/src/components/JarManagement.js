import React  from 'react'
import { useSelector, useDispatch } from 'react-redux';

import JarForm from './JarForm.js';
import JarSection from './JarsSection.js'
import { NavigationBar } from './NavigationBar.js';

import { DistributionForm } from './DistributionForm.js';
import { settingFormPurposeToAddJar, settingFormPurposeToDistributePercentagesOfJars} from '../actions/currentSelectionActions.js'

 const JarManagement = () => {
   const dispatch= useDispatch();


    const formToBeDisplayed= useSelector((state) =>(state.currentSelection.formPurpose ? state.currentSelection.formPurpose :null));


  
    return (

        <div className="distribution_page">

         {(() => {
       
            switch(formToBeDisplayed){
              case 'Edit Jar': return <JarForm/>
              case 'Add Jar': return <JarForm/>
              case 'Distribute Percentage': return <DistributionForm/>
              default : return null
            }
          })()
      }    
        
        <JarSection section="distribution"/>
        <div className="management_actions">
            <div  className="action div_img" style={{
                  backgroundImage: `url("/imgs/addIcon.png")`
                  }} onClick={()=>{ dispatch(settingFormPurposeToAddJar());}}>
                  </div>
              <div  className="action div_img" style={{
                  backgroundImage: `url("/imgs/percentageIcon.png")`
                  }} onClick={()=>{dispatch(settingFormPurposeToDistributePercentagesOfJars());}}>
            </div>
        </div>
        <NavigationBar/>
        </div>
    )
}
export default JarManagement;
