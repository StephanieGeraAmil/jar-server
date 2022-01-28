import React from 'react'
import Balance from './Balance';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/currentSelectionActions.js'

const MidSection = () => {
    const dispatch= useDispatch();

    const addingIncome=()=>{
        dispatch(actions.settingFormPurposeToIncome());
        dispatch(actions.clearMovementSelected());
    }
     const addingExpense=()=>{
        dispatch(actions.settingFormPurposeToExpense());
        dispatch(actions.clearMovementSelected());
    }
    return (
        <div className="horizontalSection">
            <div className="wallet" onClick={()=>{addingIncome();}}>
                <div  className="direction div_img" style={{
                backgroundImage: `url("/imgs/in.png")`
                }} >
                </div>
                <div  className="picture div_img" style={{
                backgroundImage: `url("/imgs/wallet.png")`
                }}>
                </div>
            </div>
            
            <Balance/>
           
            <div className="wallet" onClick={()=>{addingExpense();}}>
                    <div  className="direction div_img" style={{
                    backgroundImage: `url("/imgs/out.png")`
                    }}>
                    </div>
                    <div  className="picture div_img" style={{
                    backgroundImage: `url("/imgs/wallet.png")`
                    }}>
                    </div>
            </div>
        </div>
    )
}
export default MidSection;
