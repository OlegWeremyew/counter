import React, {ChangeEvent} from 'react';
import Button from "./Buttons/Button";
import Input from "./Input/Input";

type PropsType = {
    MaxValue: number
    startValue: number
    updateStartValue: (value: number) => void
    updateMaxValue: (value: number) => void
    updateError: (error: string) => void
    error: string
    startingMessage: string
}

export const SetInput = (props: PropsType) => {

    const setNewCurrentValueHandler = () => {
        props.updateStartValue(props.startValue)
        props.updateMaxValue(props.MaxValue)
        props.updateError("")
    }

    const error = props.startValue >= props.MaxValue
    const disabled = !props.error || props.error !== props.startingMessage

    return (
        <div>
            <div>Начальное значение: <br/>
                <Input value={props.startValue}
                       onChangeInputHandler={props.updateStartValue}
                       error={error}/>
            </div>
            <div>Максимальное значение: <br/>
                <Input value={props.MaxValue}
                       onChangeInputHandler={props.updateMaxValue}
                       error={error}/>
            </div>
            <Button ButtonCallBack={setNewCurrentValueHandler}
                    className={""}
                    name={"Обновить"}
                    disabled={disabled}/>
        </div>
    );
};
