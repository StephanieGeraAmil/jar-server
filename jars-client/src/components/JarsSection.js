import React from 'react'
import { Jar } from './Jar'
import { useSelector } from 'react-redux';

const JarsSection = () => {
     const jars=useSelector(state=> state.jars); 
    
    // const jars=[
    // {name:"NECESITIES",balance:5000},
    // {name:"GIVE",balance:150},
    // {name:"EDUCATION",balance:2000},
    // {name:"FUN",balance:1000},
    // {name:"HEALTH",balance:500},
    //   {name:"INVEST",balance:150},
    // {name:"SAVE",balance:300}]

    return (
        <div className="jarGrid">
            {jars.map((item) => {
                    return (
                        <Jar key={item._id} jar={item}/>
                    )
                })}

        </div>
    )
}
export default JarsSection
