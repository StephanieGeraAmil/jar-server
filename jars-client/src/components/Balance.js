import React,{useState,useEffect} from 'react'
import { useSelector} from 'react-redux';

const Balance = () => {
        
        const [balance, setBalance]=useState(0)
        const selector=(state) =>(state.movements ? state.movements:null);
        const movements = useSelector(selector);
        useEffect(() => {
            const reducer=(acc,item)=>acc+item.amount
            setBalance(movements.reduce(reducer,0))
        },[movements])
    
    return (
        <div className="balance">
                <h4>BALANCE</h4>
            <h1>${ new Intl.NumberFormat({useGrouping:true}).format(balance)}</h1>    
        
        </div>
    )
}
export default Balance;
