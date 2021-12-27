import React, {useEffect, useState} from 'react';
import './App.css';

import Counter from "./components/Counter";
import Buttons from "./components/Buttons";
import Button from "./components/Button";
import {SetInput} from "./components/SetInput";

function App() {

    const startValue: number = 0
    const MaxValue: number = 5
    const [current, setCurrent] = useState<number>(startValue)

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
                    />
                </div>
            </div>

        </div>
    );
}

export default App;
