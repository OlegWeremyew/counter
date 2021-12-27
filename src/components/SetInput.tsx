import React, {ChangeEvent} from 'react';
import Button from "./Button";

type PropsType = {
    ButtonCallBack: () => void
    MaxValue: number
    startValue: number
}

export const SetInput = (props: PropsType) => {

    /*    const ButtonCurrentClassName = props.current === props.MaxValue) ? "buttonCurrentMax" : "buttonCurrent"
        const ButtonResetClassName = (props.current >= props.startValue + 1) ? "buttonResetActive" : "buttonReset"*/

    const setCurrentMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newMaxCurrentValue = e.currentTarget.value
    }

    const setCurrentMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newMinCurrentValue = e.currentTarget.value
    }

    const setNewCurrentValueHandler = () => {

    }

    return (
        <div>
            <div>
                <div>
                    <span>MaxValue</span>
                    <input type="number" onChange={setCurrentMaxValueHandler} value={newMaxCurrentValue} autoFocus/>
                </div>
                <div>
                    <span>startValue</span>
                    <input type="number" onChange={setCurrentMinValueHandler} value={newMinCurrentValue} autoFocus/>
                </div>
            </div>
            <Button ButtonCallBack={setNewCurrentValueHandler} className={""} name={"set"}/>
        </div>
    );
};
