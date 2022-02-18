import React, {useEffect, useState} from 'react';
import './App.css';

import Counter from "./components/Counter";
import Buttons from "./components/Buttons/Buttons";
import {SetInput} from "./components/SetInput";

function App() {

    const startingMessage = 'введите значение и нажмите "обновить"';

    const [startValue, setStartValue] = useState<number>(0)
    const [MaxValue, setMaxValue] = useState<number>(5)
    const [current, setCurrent] = useState<number>(startValue)
    const [error, setError] = useState('')

    useEffect(() => {
        let startValueAsString = localStorage.getItem("startValue")
        let MaxValueAsString = localStorage.getItem("MaxValue")
        let currentAsString = localStorage.getItem("current")
        startValueAsString && setCurrent(JSON.parse(startValueAsString))
        MaxValueAsString && setMaxValue(JSON.parse(MaxValueAsString))
        currentAsString && setCurrent(JSON.parse(currentAsString))
    }, [])

    useEffect(() => {
        localStorage.setItem("startValue", JSON.stringify(startValue))
        localStorage.setItem("MaxValue", JSON.stringify(MaxValue))
        localStorage.setItem("current", JSON.stringify(current))
    }, [startValue, MaxValue, current])

    const changeCurrent = () => {
        if (current < MaxValue) {
            return setCurrent(current + 1);
        }
    }

    const ButtonReset = () => {
        setCurrent(startValue)
    }

    const updateStartValue = (value: number) => {
        updateError(startingMessage)
        if (value >= MaxValue || value < 0) updateError('Incorrect value')
        setStartValue(value)
        setCurrent(value)
    }

    const updateMaxValue = (value: number) => {
        updateError(startingMessage)
        if (value <= startValue || value < 0) {
            updateError('Incorrect value')
        }
        setMaxValue(value)
    }

    const updateError = (error: string) => setError(error)

    return (
        <div>
            <div className="App">
                <div className="container">
                    <Counter
                        current={current}
                        MaxValue={MaxValue}
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
                <div className="container">
                    <SetInput
                        updateStartValue={updateStartValue}
                        updateMaxValue={updateMaxValue}
                        updateError={updateError}
                        MaxValue={MaxValue}
                        startValue={startValue}
                        error={error}
                        startingMessage={startingMessage}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
