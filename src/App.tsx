import React, {useState} from 'react';
import './App.css';

import Counter from "./components/Counter";
import Buttons from "./components/Buttons";

function App() {

    const startValue: number = 0
    const MaxValue: number = 5
    const [current, setCurrent] = useState<number>(startValue)

    const changeCurrent = () => {
        if (current < MaxValue) {
            return setCurrent(current + 1);
        }
    }

    const ButtonReset = () => {
        setCurrent(startValue)
    }

    const setToLocalStorageHandler = () => {
        localStorage.setItem("currentValue", JSON.stringify(current))
    }

    const getFromLocalStorageHandler = () => {
        let currentAsString = localStorage.getItem("currentValue")
        if (currentAsString) {
            let newCurrent = JSON.parse(currentAsString)
            setCurrent(newCurrent)
        }
    }

    return (
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
                    setToLocalStorageHandler={setToLocalStorageHandler}
                    getFromLocalStorageHandler={getFromLocalStorageHandler}
                />
            </div>
        </div>
    );
}

export default App;
