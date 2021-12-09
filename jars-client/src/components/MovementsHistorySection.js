import React ,{useEffect} from 'react'
import Movement from './Movement';
import { useSelector } from 'react-redux';
const MovementsHistorySection = () => {
    useEffect(()=>{},[])
    const movements=useSelector((state)=>state.movements);
    console.log(movements);
    return (
        <div className="movement_history">
           <ul>
            {movements.map((item) => {
                return (

                    <li key={item.concept} className="itemlist">
                        <Movement key={item.concept} movement={item} />
                    </li>
                )

            })}
             </ul>
        </div>
    )
}
export default MovementsHistorySection;
