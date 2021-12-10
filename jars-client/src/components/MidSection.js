import React from 'react'
import Balance from './Balance';

const MidSection = () => {
    return (
        <div className="horizontalSection">
             {/* <a href="">
                <div  className="link div_img" style={{
                        backgroundImage: `url("/imgs/Distribution.png")`
                        }}>
                </div>
             </a> */}
                <a href="">
                    <div className="wallet">
                        <div  className="direction div_img" style={{
                        backgroundImage: `url("/imgs/in.png")`
                        }}>
                        </div>
                        <div  className="picture div_img" style={{
                        backgroundImage: `url("/imgs/wallet.png")`
                        }}>
                        </div>
                    </div>
            </a>
            <Balance/>
             <a href="">
                 <div className="wallet">
                        <div  className="direction div_img" style={{
                        backgroundImage: `url("/imgs/out.png")`
                        }}>
                        </div>
                        <div  className="picture div_img" style={{
                        backgroundImage: `url("/imgs/wallet.png")`
                        }}>
                        </div>
                    </div>
                    
            </a>        
             {/* <a href="">
                    <div  className="link div_img" style={{
                        backgroundImage: `url("/imgs/trophy.png")`
                        }}>
                </div>
                </a> */}
        </div>
    )
}
export default MidSection;
