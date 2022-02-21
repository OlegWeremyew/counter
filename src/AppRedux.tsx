import React, {useEffect} from 'react';
import './App.css';

import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {
    changeCurrentValueAC,
    resetCurrentValueAC,
} from "./store/changeCounterReducer";

function AppRedux() {

    const value = useSelector<AppRootStateType, number>(state => state.count.value)
    const dispatch = useDispatch()

    useEffect(()=>{
       // dispatch(setValueFromLocalStorageTC())
    }, [])

    const changeCurrent = () => {
            dispatch(changeCurrentValueAC())
    }

    // const ButtonReset = () => {
    //     dispatch(ResetValueTC())
    // }

    return (
        <div>
            {value}
            <button onClick={changeCurrent}>+</button>
            {/*<button onClick={ButtonReset}>reset</button>*/}
        </div>
    );
}

export default AppRedux;
