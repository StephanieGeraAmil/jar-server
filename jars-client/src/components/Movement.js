import React from 'react'

 const Movement = ({movement}) => {
     console.log(movement);
     const amount=movement.amount
     const concept=movement.concept
     const jar=movement.jar
    return (
        <div className="movement">
            <h4>{concept}</h4>
            <h4>${amount}</h4>
            <h4>{jar}</h4>
        </div>
    )
}
export default Movement;
