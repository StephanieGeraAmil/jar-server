import React from 'react'

 const Movement = ({movement}) => {
     const handleEdit=()=>{}
     const handleDelete=()=>{}
    return (
        <div className="movement">
            
            <h4 className="movement_column info_movement">{movement.concept}</h4>
            <h4 className="movement_column info_movement">${movement.amount}</h4>
            
            <h4 className="movement_column info_movement">{movement.jar}</h4>
             <div className="movement_column">
                    <div  className="movement_actions div_img" style={{
                                backgroundImage: `url("/imgs/edit.png")`
                                }} onClick={handleEdit}>
                                </div>
                        <div  className="movement_actions div_img" style={{
                    backgroundImage: `url("/imgs/delete.png")`
                    }} onClick={handleDelete}>
                    </div>
            </div>
        </div>
    )
}
export default Movement;
