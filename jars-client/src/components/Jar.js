import React from 'react'

export const Jar = () => {
    const jar_balance=150;
    const jar_name='GIVE';
    const jar_budget=500;
    
    return (
        <div>
            <h4>{jar_name}</h4>
            <div  className="jar div_img" style={{
                    backgroundImage: `url("/imgs/jar3.png")`
                    
                    }}>
            </div>
             <h4>${jar_balance}</h4>
        </div>
    )
}
