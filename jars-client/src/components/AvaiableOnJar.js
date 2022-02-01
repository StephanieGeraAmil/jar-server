import React, { useState , useEffect} from 'react'
import { useSelector} from 'react-redux';

export const AvaiableOnJar = ({jar}) => {

    const movements=useSelector((state)=>state.movements);
    const transferences=useSelector((state)=>state.transactions);
    const [amount, setAmount]=useState(0)
    

    useEffect ( () => {
    let balance=0;
                       
       movements.map(movement =>{
        
            movement.jar.map(element=>
                {
    
                    if(element._id==jar._id){
                       
                        let newBalance=0;
                        if(movement.amount<0){
                            //is expense
                            newBalance=balance+(movement.amount)/(movement.jar.length);
                            
                            
                            
                        }else{

                            const percentageThatHad=movement.jar.find(item=>item._id==jar._id).percentage;   
                            newBalance=balance+(percentageThatHad/100)*movement.amount;
                            
                            
                        }
                         balance=newBalance;
                     
                    }
                  
                }
            );
           
              
        }
       );
     
        transferences.map(item=>{
                
                 if(item.origin==jar._id){
                    balance-=item.amount;
                    
                 }
                 if(item.destination==jar._id){
                      balance+=item.amount;
                 }
                
                     

            });
    setAmount(balance);
    }
    , [movements,transferences]);

    return (
        <>
             <h4 className="balance_jar">${amount}</h4>
        </>
    )
}
