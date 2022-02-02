import React from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { settingFormPurposeToDistributePercentagesOfJars,clearFormPurpose } from '../actions/currentSelectionActions';
import { Link } from "react-router-dom";

export const NavigationBar = () => {

    return (
        <div className='navigation_bar'>

                    <Link to="/">
                        <div  className=" nav_icon picture div_img" style={{
                        backgroundImage: `url("/imgs/Dashboard.png")`
                        }}>
                        </div>
                    </Link> 
                    <Link to="/distribution">
                        <div  className=" nav_icon picture div_img" style={{
                        backgroundImage: `url("/imgs/distribution.png")`
                        }}>
                        </div>
                    </Link>
             {/* <div onClick={()=>{ dispatch(clearFormPurpose());}}>
                 
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
                </div> */}
             {/* <div onClick={()=>{}}>
                  
                    <div  className=" nav_icon picture div_img" style={{
                    backgroundImage: `url("/imgs/calendar.png")`
                    }}>
                    </div>
                </div> */}
            
             {/* <div onClick={()=>{}}>
                   
                    <div  className=" nav_icon picture div_img" style={{
                    backgroundImage: `url("/imgs/trophy.png")`
                    }}>
                    </div>
                </div> */}
            
             {/* <div onClick={()=>{}}>
                   
                    <div  className=" nav_icon picture div_img" style={{
                    backgroundImage: `url("/imgs/user.png")`
                    }}>
                    </div>
                </div> */}
             
            
        </div>
    )
}
