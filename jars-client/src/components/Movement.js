import React from 'react'

 const Movement = () => {
     const amount=500
     const concept='Car Payment'
     const jar='Necesities'
    return (
        <div className="movement">
            <h4>{concept}</h4>
            <h4>${amount}</h4>
            <h4>{jar}</h4>
        </div>
    )
}
export default Movement;
