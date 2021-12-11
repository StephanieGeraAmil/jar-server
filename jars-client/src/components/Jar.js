import React from 'react'

export const Jar = ({jar}) => {
    
    return (
        <div className="jar">
            <h4 className="info_jar">{jar.name}</h4>
            <div  className="jar_img div_img" style={{
                    backgroundImage: `url("/imgs/jar3.png")`
                    
                    }}>
            </div>
             <h4 className="info_jar">${jar.budget}</h4>
        </div>
    )
}
