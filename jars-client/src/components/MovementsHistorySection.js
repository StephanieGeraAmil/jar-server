import React from 'react'
import Movement from './Movement';
import { useSelector } from 'react-redux';
const MovementsHistorySection = () => {
    const movements=useSelector((state)=>state.movements);
    console.log(movements);
    return (
        <div className="movement_history">
            <Movement/>
             <Movement/>
              <Movement/>
               <Movement/>
        </div>
    )
}
export default MovementsHistorySection;
