import React, {useEffect} from 'react';
import './App.css';

import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {
    changeCurrentValueAC,
    IncValueTC,
    resetCurrentValueAC, ResetValueTC,
    setValueFromLocalStorageTC
} from "./store/changeCounterReducer";

function AppRedux() {

    const value = useSelector<AppRootStateType, number>(state => state.changeCount.value)
    const MaxValue = useSelector<AppRootStateType, number>(state => state.changeCount.MaxValue)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setValueFromLocalStorageTC())
    }, [])

    const changeCurrent = () => {
        if (value < MaxValue) {
            dispatch(IncValueTC())
        }
        return
    }

    const ButtonReset = () => {
        dispatch(ResetValueTC())
    }

    return (
        <div>
            {value}
            <button onClick={changeCurrent}>+</button>
            <button onClick={ButtonReset}>reset</button>
        </div>
    );
}

export default AppRedux;
