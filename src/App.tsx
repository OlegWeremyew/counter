import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';

import Counter from "./components/Counter";
import Buttons from "./components/Buttons";
import Button from "./components/Button";
import {SetInput} from "./components/SetInput";

function App() {
    const [startValue, setStartValue] = useState(0)
    const [MaxValue, setMaxValue] = useState(5)
    const [current, setCurrent] = useState(startValue)

    useEffect(() => {
        let currentAsString = localStorage.getItem("currentValue")
        if (currentAsString) {
            let newCurrent = JSON.parse(currentAsString)
            setCurrent(newCurrent)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("currentValue", JSON.stringify(current))
    }, [current])

    const changeCurrent = () => {
        if (current < MaxValue) {
            return setCurrent(current + 1);
        }
    }

    const ButtonReset = () => {
        setCurrent(startValue)
    }


    //надо исправлять
    let newMaxCurrentValue: number
    const setCurrentMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value >= 0) {
            return newMaxCurrentValue = +e.currentTarget.value
        }
    }

    let newMinCurrentValue: number
    const setCurrentMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value >= 0) {
            return newMinCurrentValue = +e.currentTarget.value
        }
    }

    const setNewCurrentValueHandler = () => {
        setMaxValue(newMaxCurrentValue)
        setStartValue(newMinCurrentValue)
    }

    return (
        <div>
            <div className="App">
                <div className="conteiner">
                    <Counter
                        current={current}
                    />
                    <Buttons
                        current={current}
                        changeCurrent={changeCurrent}
                        ButtonReset={ButtonReset}
                        MaxValue={MaxValue}
                        startValue={startValue}
                    />
                </div>
            </div>

            <div className="App">
                <div className="conteiner">
                    <SetInput
                        ButtonCallBack={() => {
                        }}
                        MaxValue={MaxValue}
                        startValue={startValue}
                        setCurrentMaxValueHandler={setCurrentMaxValueHandler}
                        setCurrentMinValueHandler={setCurrentMinValueHandler}
                        setNewCurrentValueHandler={setNewCurrentValueHandler}
                    />
                </div>
            </div>

        </div>
    );
}

export default App;
