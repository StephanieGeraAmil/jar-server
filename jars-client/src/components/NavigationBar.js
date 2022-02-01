import React from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { settingFormPurposeToDistributePercentagesOfJars,clearFormPurpose } from '../actions/currentSelectionActions';


export const NavigationBar = () => {
     const dispatch= useDispatch();
    return (
        <div className='navigation_bar'>
             <div onClick={()=>{ dispatch(clearFormPurpose());}}>
                 
                    <div  className=" nav_icon picture div_img" style={{
                    backgroundImage: `url("/imgs/Dashboard.png")`
                    }}>
                    </div>
                </div>
            <div onClick={()=>{dispatch(settingFormPurposeToDistributePercentagesOfJars());}}>
                  
                    <div  className=" nav_icon picture div_img" style={{
                    backgroundImage: `url("/imgs/distribution.png")`
                    }}>
                    </div>
                </div>
             <div onClick={()=>{}}>
                  
                    <div  className=" nav_icon picture div_img" style={{
                    backgroundImage: `url("/imgs/calendar.png")`
                    }}>
                    </div>
                </div>
            
             <div onClick={()=>{}}>
                   
                    <div  className=" nav_icon picture div_img" style={{
                    backgroundImage: `url("/imgs/trophy.png")`
                    }}>
                    </div>
                </div>
            
             <div onClick={()=>{}}>
                   
                    <div  className=" nav_icon picture div_img" style={{
                    backgroundImage: `url("/imgs/user.png")`
                    }}>
                    </div>
                </div>
             
            
        </div>
    )
}
