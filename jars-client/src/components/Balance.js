import React from 'react'

const Balance = () => {
        const balance=15000
   
    return (
        <div className="balance">
            <h4>BALANCE</h4>
            <h1>${ new Intl.NumberFormat({useGrouping:true}).format(balance)}</h1>    
        </div>
    )
}
export default Balance;
