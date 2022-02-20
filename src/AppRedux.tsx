import React, {useEffect} from 'react';
import './App.css';

import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {
    changeCurrentValueAC,
    IncValueTC,
    resetCurrentValueAC,
    setValueFromLocalStorageAC
} from "./store/changeCounterReducer";

function AppRedux() {

    const value = useSelector<AppRootStateType, number>(state => state.changeCount.value)
    const MaxValue = useSelector<AppRootStateType, number>(state => state.changeCount.MaxValue)
    const dispatch = useDispatch()

    useEffect(()=>{

    }, [])

    const changeCurrent = () => {
        if (value < MaxValue) {
            dispatch(IncValueTC())
        }
        return
    }

    const ButtonReset = () => {
        dispatch(resetCurrentValueAC())
    }

    const SetValueFromLocalStorage = (e: number) => {
        dispatch(setValueFromLocalStorageAC(10))
    }

    return (
        <div>
            {value}
            <button onClick={changeCurrent}>+</button>
            <button onClick={ButtonReset}>reset</button>
            <button onClick={() => {
            }}>set value
            </button>
            <input type="number" onChange={e => SetValueFromLocalStorage(+e.currentTarget.value)}/>
        </div>
    );
}

export default AppRedux;
