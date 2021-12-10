import React from 'react'

 const Movement = ({movement}) => {
    return (
        <div className="movement">
            <h4 className="info_movement">{movement.concept}</h4>
            <h4 className="info_movement">${movement.amount}</h4>
            <h4 className="info_movement">{movement.jar}</h4>
        </div>
    )
}
export default Movement;
