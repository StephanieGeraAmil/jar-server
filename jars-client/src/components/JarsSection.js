import React, { useEffect } from 'react'
import { Jar } from './Jar'
import { useSelector } from 'react-redux';
import JarMoneyTransfer from './JarMoneyTransfer.js';

const JarsSection = () => {
     const jars=useSelector(state=> state.jars); 
    
    useEffect(()=>{
        console.log(jars)
        console.log(jars[0])
    },[jars])

    return (
        <>
            <div className="jarGrid">
                {jars.map((item) => {
                        return (
                            <Jar key={item._id} jar={item}/>
                        )
                    })}

            </div>
            
            <JarMoneyTransfer originJar={jars[0]}/>
        </>
    )
}
export default JarsSection
