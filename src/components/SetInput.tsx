import React, {ChangeEvent} from 'react';
import Button from "./Button";

type PropsType = {
    MaxValue: number
    startValue: number
    updateStartValue: (value: number) => void
    updateMaxValue: (value: number) => void
    updateError: (error: string) => void
    error: string
}

export const SetInput = (props: PropsType) => {

    /*    const ButtonCurrentClassName = props.current === props.MaxValue) ? "buttonCurrentMax" : "buttonCurrent"
        const ButtonResetClassName = (props.current >= props.startValue + 1) ? "buttonResetActive" : "buttonReset"*/

    return (
        <div>
            <div>
                <div>
                    <span>MaxValue</span>
                    <input type="number"
                          /* onChange={props.setCurrentMaxValueHandler}*/
                           /*value={props.MaxValue}*/
                           autoFocus/>
                </div>
                <div>
                    <span>startValue</span>
                    <input type="number"
                         /*  onChange={props.setCurrentMinValueHandler}*/
                           /*value={props.startValue}*/
                           autoFocus/>
                </div>
            </div>
            <Button ButtonCallBack={props.setNewCurrentValueHandler}
                    className={""}
                    name={"Обновить"}/>
        </div>
    );
};
