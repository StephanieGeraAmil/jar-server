import React, { useEffect } from 'react'
import { Jar } from './Jar'
import { useSelector } from 'react-redux';
import JarMoneyTransfer from './JarMoneyTransfer.js';

const JarsSection = ({section}) => {
    const jars=useSelector(state=> state.jars); 

   
 
  
    return (
        <>
            <div className="jarGrid">
                {jars.map((item) => {
                        return (
                            <Jar key={item._id} jar={item} section={section}/>
                        )
                    })}

            </div>
        </>
    )
}
export default JarsSection
