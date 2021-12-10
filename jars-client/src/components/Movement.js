import React from 'react'

 const Movement = ({movement}) => {
     console.log(movement);
     const amount=movement.amount
     const concept=movement.concept
     const jar=movement.jar
    return (
        <div className="movement">
            <h4 className="info_movement">{concept}</h4>
            <h4 className="info_movement">${amount}</h4>
            <h4 className="info_movement">{jar}</h4>
        </div>
    )
}
export default Movement;
