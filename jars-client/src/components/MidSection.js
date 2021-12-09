import React from 'react'
import Balance from './Balance';

const MidSection = () => {
    return (
        <div className="horizontalSection">
             <a href="">
                <div  className="link div_img" style={{
                        backgroundImage: `url("/imgs/Distribution.png")`
                        }}>
                </div>
             </a>
                
            <Balance/>
             <a href="">
                    <div  className="link div_img" style={{
                        backgroundImage: `url("/imgs/trophy.png")`
                        }}>
                </div>
                </a>
        </div>
    )
}
export default MidSection;
